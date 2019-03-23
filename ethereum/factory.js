import web3 from './web3';
import AuctionFactory from './build/AuctionFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(AuctionFactory.interface), '0x70A00dB028fb7F305Cba3714b426ef01B0EAf3CF');


export default instance;
