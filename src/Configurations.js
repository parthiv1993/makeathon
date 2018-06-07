import React from "react";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import constants from './constants.js';

class Configurations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      configurations: []
    };
  }

  componentWillMount() {
    this.getData();
  }

  getData(){
    axios.get(constants.configApiUrl)
      .then(response => {
        const data = response.data;
        const configurations = data.map(
          (config)=> new ItemConfiguration(
            config.name,
            config.maxCount,
            config.minCount,
            config.vendorName
          )
        );
        configurations.sort(function(a, b) {
          return a.item > b.item;
      });
        this.setState({configurations});
      })
  }

  handleChange(i,key,event) {
    const configurations = this.state.configurations;
    configurations[i][key]=event.target.value;
    this.setState({configurations});
  }

  renderEachConfiguration(config,i) {
    return (
    <Grid item xs={12} key={i}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={4}>
                <TextField
                  id={"item"+i}
                  label={"Item"}
                  value={config.item || ''}
                  onChange={this.handleChange.bind(this,i,'item')}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                    id={"maximum"+i}
                    label={"Maximum Quantity"}
                    value={config.maximum || ''}
                    onChange={this.handleChange.bind(this,i,'maximum')}
                    margin="normal"
                  />
              </Grid>
              <Grid item xs={4}>
                <TextField
                    id={"minimum"+i}
                    label={"Minimum Quantity"}
                    value={config.minimum || ''}
                    onChange={this.handleChange.bind(this,i,'minimum')}
                    margin="normal"
                    helperText="Minimum quantity you would like to have"
                  />
              </Grid>
              <Grid item xs={4}>
                <TextField
                    id={"vendor"+i}
                    label={"Preferred Vendor"}
                    value={config.dealer || ''}
                    onChange={this.handleChange.bind(this,i,'dealer')}
                    margin="normal"
                  />
              </Grid>
              <Grid item xs={4}>
                <TextField
                    id={"strategy"+i}
                    label={"Order strategy"}
                    value={config.orderStrategy || ''}
                    onChange={this.handleChange.bind(this,i,'orderStrategy')}
                    margin="normal"
                  />
              </Grid>
              <Grid item xs={4}>
                <div style={{paddingTop:'20px'}}>
                  {config.promotion}
                </div>
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
          <CardHeader title={"Your Configurations"}> </CardHeader>
        </Grid>
        <Grid container spacing={24}>
          {this.state.configurations.map((config,i) => {
            return this.renderEachConfiguration(config,i);
          })}
          <Grid item xs={12}>
            <Button variant="contained" size="large" color="secondary" disabled>
              Add new Configuration
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" size="large" color="primary" disabled>
              save
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

class ItemConfiguration {
  constructor(
    item,
    maximum,
    minimum,
    dealer = "Amazon"
  ) {
    this.item = item;
    this.maximum = maximum;
    this.minimum = minimum;
    this.dealer = dealer;
    this.orderStrategy = item=='Coke'?'Automatic' :'Manual' ;
    this.promotion = item == 'Coke' ? 'There is Buy 2 Get 1 Free offer on Flipkart' : 
                     item == 'Eggs' ? 'Eggs are provided at BigBasket at 20% Off. Use promocode EGGS20' :
                     'You already have best deal'
  }
}

export default Configurations;
