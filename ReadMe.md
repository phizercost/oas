Online Auctioning System
========================

An online managed auctioning system using a smart contract deployed on Ethereum Rinkeby Test network.

Create bid by providing the following:

	* Minimum starting bidding amount
	
	* Start date
	
	* End date
	
	* A title
	
	* A brief description
	
Every bid must outbid the previous either with the total starting amount or the total cumulative amount bid from the same address.

Available features

	* Bid
	
	* Withdraw after cancelation (All bidders)
	
	* Withdraw after completion (Only failed bids)


Administrative tasks:(Administrative tasks are handled by the manager(initiator) of the contract.)
	
	* Cancel Auction
	
	* Changing the ending date
	
	* Suspend the auctioning system
	
Pre requisites

	* npm
	* ganache-cli
	* mocha
	* solc@0.4.25
	* fs-extra
	* web3@1.0.0-beta.37
	* truffle-hdwallet-provider@0.0.3
	* next@4.1.4
	* react
	* react-dom
	* semantic-ui-react
	* semantic-ui-css
	* next-routes

Test environment

	* mocha
	
Development

	* node server.js
