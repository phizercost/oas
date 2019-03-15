const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require ('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require ('../ethereum/build/AuctionFactory.json');
const compiledAuction = require ('../ethereum/build/Auction.json');

let accounts;
let factory;

let auctionAddress;
let auction;

beforeEach(async() => {
    //get testing accounts from ganache: 10 accounts
    accounts = await web3.eth.getAccounts();
    //Deploy Auction Factory contract on the network
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data: compiledFactory.bytecode})
        .send({from: accounts[0], gas:'3000000'});
    
        //create an auction 
        await factory.methods.createAuction('0','1551398400','1554076799',"Test Title", "Test Description").send({
            from:accounts[0],//manager of the auction
            gas: '3000000'
        });

        //Read the address of the created auction
        const addresses = await factory.methods.getDeployedAuctions().call();//View function are not costly
        auctionAddress = addresses[0]; //or [auctionAddress] = await factory.methods.getDeployedAuctions().call;
        //Interacting with an already deployed auction
        auction = await new web3.eth.Contract(
            JSON.parse(compiledAuction.interface),
            auctionAddress
        );

});

describe ('Auctions',() => {
    it('deploys a factory  and an auction', () => {
        assert.ok(factory.options.address);
        assert.ok(auction.options.address);
    });

    it('marks caller as the auction owner', async() => {
        const manager = await auction.methods.manager().call();
        assert.equal(accounts[0],manager);
    });

    it('Allows people to bid adds them to the group of bidders', async() => {
        await auction.methods.bid().send({
            value:'200',
            from:accounts[1],
            gas:'3000000'
        });
        const isBidder = await auction.methods.bids(accounts[1]).call();
        assert(isBidder);
    });

    it('Has a minimum bid amount required', async() => {
        try {
            await auction.methods.bid().send({
                value:'10',
                from:accounts[2],
                gas:'3000000'
            });
            assert(false);
        } catch (error) {
            assert(error);
        }
    });

    it('suspends the auction by the manager', async() => {
        await auction.methods.changeSuspensionStatus().send({
            from:accounts[0],
            gas:'3000000'
        });
        const status = await auction.methods.suspensionStatus().call();
        assert.equal(status,true);
    });

    it('reactivates the auction after suspension by the manager', async() => {
        await auction.methods.changeSuspensionStatus().send({
            from:accounts[0],
            gas:'3000000'
        });
        const status = await auction.methods.suspensionStatus().call();
        assert.equal(status,true);
    });
});