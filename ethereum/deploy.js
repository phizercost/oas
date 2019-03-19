
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory  = require('./build/AuctionFactory.json')



const provider = new HDWalletProvider(
    'wheat tomorrow suggest current dash tube crater evil town prosper practice sample',
    'https://rinkeby.infura.io/v3/ec92d8df913548909e7f380c89bd5cf3'
);

const web3 = new Web3(provider);

//help for async

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data:'0x' + compiledFactory.bytecode})
        .send({from: accounts[0], gas: '3000000'});
    console.log('Contract deployed to ',result.options.address);
;}

deploy();

//0x8c96CA884D74F23F3459Bd361199E598eC2bEfd1