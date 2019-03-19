import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Auction from "../ethereum/auction";
import web3 from "../ethereum/web3";
import { Router } from "../routes";

class BidForm extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();
    const auction = Auction(this.props.address);
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await auction.methods.bid().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether")
      });
      Router.replaceRoute(`/auctions/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Bid</label>
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />
          <Message error header="Ooops!" content={this.state.errorMessage} />
        </Form.Field>
        <Button secondary loading={this.state.loading}>
          Bid!
        </Button>
      </Form>
    );
  }
}

export default BidForm;
