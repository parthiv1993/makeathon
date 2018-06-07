import React from "react";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import constants from './constants.js';
import Divider from '@material-ui/core/Divider';


class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toBePlacedorders: [],
      placedOrders:[]
    };
  }

  componentDidMount(){
    this.getData();
    this.interval = setInterval(this.getData.bind(this),2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData(){
      axios.get(constants.ordersApiUrl)
        .then(response => {
          const orders = response.data;
          const toBePlacedorders = orders.filter((order)=>order.name != 'Coke');
          const placedOrders = orders.filter((order)=>order.name == 'Coke');
          toBePlacedorders.sort(function(a, b) {
                return a.name > b.name;
            });
            placedOrders.sort(function(a, b) {
              return a.name > b.name;
          })
          this.setState({toBePlacedorders : toBePlacedorders,placedOrders});
        })
  }

  placeOrder() {
    axios.put(constants.placeOrderUrl,this.state.toBePlacedorders).then(
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
          <CardHeader title={"Manual orders awaiting confirmation"}> </CardHeader>
        </Grid>
        <Grid container spacing={24}>
          {this.state.toBePlacedorders.map((order,i) => {
            return this.renderEachOrder(order,i);
          })}
          <Grid item xs={12}>
            {this.state.toBePlacedorders.length > 0 ? (
              <Button variant="contained" size="large" color="primary" onClick={this.placeOrder.bind(this)}>
                Place orders
              </Button>
            ) : (
              <h2>There are no orders to be placed</h2>
            )}
          </Grid>
        </Grid>
        <br/><br/><br/>
        <Divider />
        <br/><br/><br/>
          <Grid container spacing={24}>
            <CardHeader title={"Automatically placed orders"}> </CardHeader>
          </Grid>
          <Grid container spacing={24}>
            {this.state.placedOrders.map((order,i) => {
              return this.renderEachOrder(order,i);
            })}
            <Grid item xs={12}>
              {this.state.placedOrders.length > 0 ? null : (
                <h2>There are no orders placed</h2>
              )}
            </Grid>
          </Grid>
      </div>
    );
  }
}

export default Orders;
