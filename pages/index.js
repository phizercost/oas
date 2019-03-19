import factory from "../ethereum/factory";
import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

class AuctionIndex extends Component {
  static async getInitialProps() {
    const auctions = await factory.methods.getDeployedAuctions().call();
    return { auctions };
  }
  renderAuctions() {
    const items = this.props.auctions.map(address => {
      return {
        header: address,
        description: (<Link route={`/auctions/${address}`}><a>View Auction</a></Link>),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>
		  <h3>Open Auctions</h3>
          {this.renderAuctions()}
          <Button
		  	floated="right"
            content="Create Auction"
            icon="add circle"
            secondary //Primary is blue, Secondary is black
          />
        </div>
      </Layout>
    );
  }
}

export default AuctionIndex;
