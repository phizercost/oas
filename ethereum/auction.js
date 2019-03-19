import web3 from "./web3";
import Auction from "./build/Auction.json";

export default address => {
  return new web3.eth.Contract(JSON.parse(Auction.interface), address);
};
