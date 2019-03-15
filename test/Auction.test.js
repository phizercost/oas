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
        await factory.methods.createAuction('0','20190314','20190330',"Test Title", "Test Description").send({
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
});