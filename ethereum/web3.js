import Web3 from 'web3';

let web3;


if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//we are in the browser and metamask is running
//We can hijack metamask 
web3 = new Web3(window.web3.currentProvider);
} else {
// We are on the server *OR* the user is not running metamask. We create our own provider
//No problem of sharing the infura key
	const provider = new Web3.providers.HttpProvider(
			'https://rinkeby.infura.io/v3/ec92d8df913548909e7f380c89bd5cf3'
	);
	web3 = new Web3(provider);
}

export default web3;

