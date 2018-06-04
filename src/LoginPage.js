import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <Grid container spacing={8}>
          <Grid item xs={2} sm={3} md={4} lg={5} />
          <Grid item xs={8} sm={6} md={4} lg={2}>
            <FormControl style={{ width: "100%" }}>
              <InputLabel htmlFor="userName">Username</InputLabel>
              <Input
                style={{ width: "100%" }}
                fullWidth={true}
                id="userName"
                type="text"
              />
            </FormControl>
            <FormControl style={{ width: "100%" }}>
              <InputLabel htmlFor="adornment-password">Password</InputLabel>
              <Input
                style={{ width: "100%" }}
                fullWidth={true}
                id="adornment-password"
                type="password"
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <Button
                variant="contained"
                color="primary"
                onClick={this.props.logIn}
              >
                Login
              </Button>
            </FormControl>
          </Grid>
          <Grid item xs={2} sm={3} md={4} lg={5} />
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
