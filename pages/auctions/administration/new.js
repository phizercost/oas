import React, { Component } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Auction from "../../../ethereum/auction";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";
import Layout from "../../../components/Layout";

class DetailNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: ""
  };
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }
  onSubmit = async event => {
    event.preventDefault();
    const auction = Auction(this.props.address);
    //const {description, value, recipient} = this.state;

    try {
        const accounts = await web3.eth.getAccounts();
        const bid = await auction.methods.getBid(accounts[0]).call();
        
    } catch (err) {
        console.log(err);
    }

}
  render() {
    return (
      <Layout>
      <h3>Create a Detail</h3>
        <Form onSubmit = {this.onSubmit}>
            <Button secondary>Check!</Button>
        </Form>
      </Layout>
    );
  }
}

export default DetailNew;

