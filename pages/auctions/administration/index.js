import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/Layout";

class AdminIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }
  render() {
    
    return (
            
        <Layout>
            <h3>Details</h3>
            <Link route={`/auctions/${this.props.address}/administration/new`}>
                <a>
                    <Button secondary>Add Detail</Button>
                </a>
            </Link>
        </Layout>
    );
  }
}
export default AdminIndex;
