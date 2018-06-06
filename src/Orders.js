import React from "react";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import constants from './constants.js';

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData(){
      axios.get(constants.ordersApiUrl)
        .then(response => {
          const orders = response.data;
          this.setState({orders});
        })
  }

  placeOrder() {
    axios.put(constants.placeOrderUrl,this.state.orders).then(
      (res)=>{
        this.getData();
      }
    )
  }

  renderEachOrder(order,i) {
    return (
      <Grid item xs={12} key={i}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                Item:<h2>{order.name}</h2>
              </Grid>
              <Grid item xs={6}>
                quantity:<h2>{order.count}</h2>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <CardHeader title={"Your Orders"}> </CardHeader>
        </Grid>
        <Grid container spacing={24}>
          {this.state.orders.map((order,i) => {
            return this.renderEachOrder(order,i);
          })}
          <Grid item xs={12}>
            {this.state.orders.length > 0 ? (
              <Button variant="contained" size="large" color="primary" onClick={this.placeOrder.bind(this)}>
                Place Order
              </Button>
            ) : (
              <h2>There are no orders to be placed</h2>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Orders;
