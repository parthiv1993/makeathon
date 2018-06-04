import React from "react";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      holdings: [
        {
          item: "Milk",
          quantity: 3
        },
        {
          item: "Beers",
          quantity: 7
        },
        {
          item: "Eggs",
          quantity: 6
        }
      ]
    };
  }

  renderItemCard(item) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card style={{ margin: "10px" }}>
          <CardHeader title={item.item}> </CardHeader>
          <CardHeader title={item.quantity} />
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
          {this.state.holdings.map(item => {
            return this.renderItemCard(item);
          })}
        </Grid>
      </div>
    );
  }
}
export default DashBoard;
