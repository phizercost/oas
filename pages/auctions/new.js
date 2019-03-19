import { Form, Button, Message, Input } from "semantic-ui-react";
import React, { Component } from "react";
import Layout from "../../components/Layout"; //To get the main layout
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import {Router} from '../../routes';


function dateToSeconds(date){
  let dateD = new Date(date);
  let seconds = dateD.getTime() / 1000; 
  return seconds;
}


class AuctionNew extends Component {
  state = {
    minimumBid: "",
    startDate: "",
    endDate: "",
    title: "",
    description: "",
    errorMessage: "",
    loading: false
  };
  onSubmit = async event => {
    event.preventDefault(); //prevent submitting the form
    this.setState({ loading: true, errorMessage: '' });
    try {
      //import the create auction
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createAuction(
          this.state.minimumBid,
          dateToSeconds(this.state.startDate),
          dateToSeconds(this.state.endDate),
          this.state.title,
          this.state.description
        )
        .send({
          from: accounts[0]
        });
        Router.pushRoute('/');
    } catch (error) {
        this.setState({ errorMessage: error.message });
        this.setState({ loading: false });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
        <h3>Create an auction</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum starting bid</label>
            <Input
              label="Ether"
              labelPosition="right"
              value={this.state.minimumBid}
              onChange={event =>
                this.setState({ minimumBid: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Start Date</label>
            <Input
              label="YYYY-MM-DD"
              labelPosition="right"
              value={this.state.startDate}
              onChange={event =>
                this.setState({ startDate: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>End Date</label>
            <Input
              label="YYYY-MM-DD"
              labelPosition="right"
              value={this.state.endDate}
              onChange={event => this.setState({ endDate: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Title</label>
            <Input
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="ERROR" content={this.state.errorMessage}/>
          <Button loading={this.state.loading} secondary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default AuctionNew;
