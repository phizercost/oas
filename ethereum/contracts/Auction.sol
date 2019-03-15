pragma solidity ^0.4.25;

contract AuctionFactory {
	
	Auction[] public deployedAuctions;
	
	function createAuction(uint minimum, uint sDate, uint eDate, string memory title, string memory description) public {
		Auction newAuction = new Auction(minimum, sDate, eDate, title, description, msg.sender);
		deployedAuctions.push(newAuction);	
	}
	
	function getDeployedAuctions() public view returns (Auction[] memory) {
		return deployedAuctions;
	}

}



contract Auction {
    
    struct Bid {
		uint256 value;
		address bidder;
	}
	
	address public manager;
    Bid private highestBid;
   // Bid[] public bids;
    mapping(address => uint256) public bids;
    uint public bidsCount;
    uint256 private bidAmount;
    uint public biddersCount;
    bool public suspensionStatus;
    bool public cancelationStatus;
    bool public completionStatus;
    uint public startDate;
    uint public endDate;
    string public auctionTitle;
    string public auctionDescription;
    
    modifier restricted(){
    	require(msg.sender == manager, "You are not allowed to perform this operation");
    	_;//The execution when verified
    }
    
    //Constructor
   constructor (uint highest, uint sDate, uint eDate, string memory title, string memory description, address owner) public {
        manager = owner;
        highestBid.value = highest;
        suspensionStatus = false;
        cancelationStatus = false;
        completionStatus = false;
        startDate = sDate;
        endDate = eDate;
        auctionTitle = title;
        auctionDescription = description;
        bidsCount = 0;
        biddersCount = 0;
        bidAmount = 0;
        //JavaScript Math.floor(Date.now() / 1000)
    }
    
    //Bid function which allows bidders to send their money for the Auction
    function bid() public payable {
        uint256 bidValue = getBid(msg.sender);
        uint256 finalBidValue;
        bool previoudBidStatus;
        if ( bidValue > 0) {
            finalBidValue = bidValue + msg.value;
            previoudBidStatus = true;
            bidAmount = bidAmount + msg.value;
        } else {
            finalBidValue = msg.value;
            previoudBidStatus = false;
            bidAmount = bidAmount + finalBidValue;
        }

    	require(finalBidValue > highestBid.value, "Your total bid amount should be greater than the Highest bid.");// A bid should be greater than the Highest bid done 
    	if (previoudBidStatus){
    	    updateBid(finalBidValue, msg.sender);
    	    bidsCount = bidsCount + 1;
    	} else {
    	    createBid(finalBidValue, msg.sender);
    	    bidsCount = bidsCount + 1;
    	    biddersCount = biddersCount + 1;
    	}
    	manager.transfer(msg.value);
    	
    }
    
    
    function createBid(uint256 value, address bidder) private {
        
        if(now > endDate && !completionStatus) {
            completionStatus = true;
        }
        require(!suspensionStatus, "Auction is currently suspended");
        require(!cancelationStatus, "Auction has been canceled");
        require(!completionStatus, "Auction has ended");
        require(now >= startDate, "Auction not yet started");
        require(now <= endDate, "Auction already ended");
         //dates between startDate and endDate 1551398400, 1554076799
    	bids[bidder] = value;
    	highestBid.value = value;
    	highestBid.bidder = bidder;
    	
    	
    }
    
    function updateBid(uint256 value, address bidder) private {
        if(now > endDate && !completionStatus) {
            completionStatus = true;
        }
        require(!suspensionStatus, "Auction is currently suspended");
        require(!cancelationStatus, "Auction has been canceled");
        require(now >= startDate, "Auction not yet started");
        require(now <= endDate, "Auction already ended");
        require(!completionStatus, "Auction has ended");
        //dates between startDate and endDate 1551398400, 1554076799
    	bids[bidder] = value;
    	highestBid.value = value;
    	highestBid.bidder = bidder;
    	
    }
    
    function getBid(address bidderAddress) public view returns (uint256) {
        uint256 localBidAmount = bids[bidderAddress];
        localBidAmount > 0 ? localBidAmount = localBidAmount : localBidAmount = 0; 
        return localBidAmount;
    }
    
    
    
    function changeSuspensionStatus() public restricted {
       suspensionStatus ? suspensionStatus = false : suspensionStatus = true;
    }
    
    function cancelAuction() public restricted {
       cancelationStatus = true;
    }
    
    function withdrawAfterCompletion() public {
        
        require(completionStatus,"The auction is not yet completed");
        require(msg.sender != highestBid.bidder, "You won the bid and cannot withdraw");
    	uint256 amount = bids[msg.sender];
        if (amount > 0) {
            bids[msg.sender] = 0;
            msg.sender.transfer(amount);
        }
    }
    
    function withdrawAfterCancelation() public {
        require(cancelationStatus,"The auction has not been canceled");
        uint256 amount = getBid(msg.sender);
        if (amount > 0) {
            bids[msg.sender] = 0;
            msg.sender.transfer(amount);
        }
    	
    }
    
    function getHighestBid() public view returns (uint256) {
        return highestBid.value;
    	
    }
    
    function getTotalBidders() public view returns (uint) {
        return biddersCount;
    	
    }
    
    function getTotalAmountBid() public restricted view returns (uint256) {
        return bidAmount;
    	
    }
    
    function getMyBalance() public view returns (uint256) {
        return msg.sender.balance;
    	
    }
    
     function changeEndDate(uint newEndDate) public restricted {
        endDate = newEndDate;
    	
    }
    
    function appendUintToString(string memory inStr, uint v) private pure returns (string memory str) {
        uint maxlength = 100;
        bytes memory reversed = new bytes(maxlength);
        uint i = 0;
        while (v != 0) {
            uint remainder = v % 10;
            v = v / 10;
            reversed[i++] = byte(48 + remainder);
        }
        bytes memory inStrb = bytes(inStr);
        bytes memory s = new bytes(inStrb.length + i);
        uint j;
        for (j = 0; j < inStrb.length; j++) {
            s[j] = inStrb[j];
        }
        for (j = 0; j < i; j++) {
            s[j + inStrb.length] = reversed[i - 1 - j];
        }
        str = string(s);
    }
    
}

