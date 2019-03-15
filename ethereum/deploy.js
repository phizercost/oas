
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory  = require('./build/AuctionFactory.json')



const provider = new HDWalletProvider(
    'wheat tomorrow suggest current dash tube crater evil town prosper practice sample',
    'https://rinkeby.infura.io/v3/f912a150019841149bed55d1b21acf6f'
);

const web3 = new Web3(provider);

//help for async

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({data:'0x' + compiledFactory.bytecode})
        .send({from: accounts[0], gas: '1000000'});
    console.log('Contract deployed to ',result.options.address);
;}

deploy();

