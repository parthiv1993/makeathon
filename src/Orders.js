import React from "react";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";

class Orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [
        {
          orderItem: "Milk",
          quantity: 3
        },
        {
          orderItem: "Beers",
          quantity: 4
        },
        {
          orderItem: "Eggs",
          quantity: 2
        }
      ]
    };
  }

  renderEachOrder(order) {
    return (
      <Grid item xs={12}>
        <Card style={{ margin: "10px" }}>
          <CardHeader title={order.orderItem}> </CardHeader>
          <CardHeader title={order.quantity} />
        </Card>
      </Grid>
    );
  }

  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <CardHeader title={"Your Current Holdings"}> </CardHeader>
        </Grid>
        <Grid container spacing={24}>
          {this.state.orders.map(order => {
            return this.renderEachOrder(order);
          })}
        </Grid>
      </div>
    );
  }
}

export default Orders;
