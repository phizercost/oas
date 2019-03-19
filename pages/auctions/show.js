import React, { Component } from "react";
import Layout from "../../components/Layout";
import Auction from "../../ethereum/auction";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import BidForm from "../../components/BidForm";
import { Link } from "../../routes";




function dateFromSeconds(seconds){
  let t = new Date(1970, 0, 1);
  t.setSeconds(seconds);
  return t;
}

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

class AuctionShow extends Component {
  static async getInitialProps(props) {
    const auction = Auction(props.query.address); //Address of the auction we want to show
    const summary = await auction.methods.getSummary().call();
    const accounts = await web3.eth.getAccounts();
    const totalBid = web3.utils.fromWei(await auction.methods.getBid(accounts[0]).call());
    const title = await auction.methods.getAuctionTitle().call();
    const description = await auction.methods.getAuctionDescription().call();
    return {
      address: props.query.address,
      auctionTitle: title,
      auctionDescription: description,
      startDate: formatDate(dateFromSeconds(summary[0])),
      endDate: formatDate(dateFromSeconds(summary[1])),
      highestBid: summary[2],
      totalBidders: summary[3],
      totalAmountBid: summary[4],
      completionStatus: summary[5],
      manager: summary[6],
      myTotalBid: totalBid
    };
  }

  renderCards() {
    const {
      manager,
      auctionTitle,
      auctionDescription,
      startDate,
      endDate,
      totalBidders,
      totalAmountBid,
      myTotalBid,
      highestBid
    } = this.props;

    const items = [
      {
        header: auctionTitle,
        meta: "Title",
        description:
        auctionDescription
      },
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager handles administrative rights of this auction",
        style: { overflowWrap: "break-word" }
      },
      {
        header: totalBidders,
        meta: "Number of Bidders",
        description:
          "Number of people who have already made at least one bid to this auction"
      },
      {
        header: startDate,
        meta: "Starting date",
        description: "This is the date the auction is supposed to start on"
      },
      {
        header: endDate,
        meta: "Ending date",
        description: "This is the date the auction is supposed to end on"
      },
      
      {
        header: web3.utils.fromWei(totalAmountBid, "ether"),
        meta: "Total amount bid",
        description: "Total amount of money bid(ether)"
      },
      {
        header: web3.utils.fromWei(highestBid, "ether"),
        meta: "Highest bid(ether)",
        description: "This is the highest amount bid so far"
      },
      {
        header: myTotalBid,
        meta: "My Total bid",
        description: "Cumulative amount of my bid"
      }
    ];
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Auction Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
            <Grid.Column width={6}>
              <BidForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default AuctionShow;
