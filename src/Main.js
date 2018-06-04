import React from "react";
import Header from "./Header.js";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Theme from "./Theme.js";
import LoginPage from "./LoginPage.js";
import DashBoard from "./DashBoard.js";
import Orders from "./Orders.js";
import Configurations from "./Configurations.js";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      pageOpen: "dashboard"
    };

    this.logIn = this.logIn.bind(this);
  }

  logIn() {
    this.setState({ isLoggedIn: true });
  }

  setPageOpen(page) {
    this.setState({
      pageOpen: page
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <div>
          <Header
            isLoggedIn={this.state.isLoggedIn}
            setPageOpen={this.setPageOpen.bind(this)}
          />
          {this.state.isLoggedIn ? (
            this.state.pageOpen == "orders" ? (
              <Orders />
            ) : this.state.pageOpen == "configurations" ? (
              <Configurations />
            ) : (
              <DashBoard />
            )
          ) : (
            <LoginPage logIn={this.logIn} />
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MainPage;
