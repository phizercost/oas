import web3 from './web3';
import AuctionFactory from './build/AuctionFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(AuctionFactory.interface), '0x4d17D0F74259270976D87bE8CA38aD18425e61fC');


export default instance;
