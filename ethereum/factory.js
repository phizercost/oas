import web3 from './web3';
import AuctionFactory from './build/AuctionFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(AuctionFactory.interface), '0xcF86D10b9107224D8367C1853FD76a2340Fbb608');


export default instance;
