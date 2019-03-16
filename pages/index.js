import factory from "../ethereum/factory";
import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

class AuctionIndex extends Component {
  static async getInitialProps() {
    const auctions = await factory.methods.getDeployedAuctions().call();
    return { auctions };
  }
  renderAuctions() {
    const items = this.props.auctions.map(address => {
      return {
        header: address,
        description: <a>View Auction</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
        />
        {this.renderAuctions()}
        <Button
          content="Create Auction"
          icon="add circle"
          secondary //Blue, Secondary is black
        />
      </div>
    );
  }
}

export default AuctionIndex;
