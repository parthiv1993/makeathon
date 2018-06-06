import React from "react";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import axios from 'axios'
import constants from './constants.js';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      holdings: []
    };
  }

  componentWillMount() {
    this.getData();
  }

  componentDidMount(){
    this.interval = setInterval(this.getData.bind(this),3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getData(){
      axios.get(constants.holdingsApiUrl)
        .then(response => {
          const holdings = response.data;
          this.setState({holdings});
        })
  }

  renderItemCard(item,i) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
        <Card style={{ margin: "10px" }}>
          <CardHeader title={item.name}> </CardHeader>
          <CardHeader title={item.count} />
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
          {this.state.holdings.map((item,i) => {
            return this.renderItemCard(item,i);
          })}
        </Grid>
      </div>
    );
  }
}
export default DashBoard;
