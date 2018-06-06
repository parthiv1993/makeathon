import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      userName : '',
      password : '',
      open :false
    }
  }

  onUserNameChange(ev) {
    this.setState({
      userName : ev.target.value
    });
  }

  onPasswordChange(ev) {
    this.setState({
      password : ev.target.value
    });
  }

  logIn() {
    if(this.state.userName == 'User' && this.state.password=='password') {
      this.props.logIn();
    }
    else {
      this.openSnackBar();
    }
  }

  openSnackBar = () => {
    this.setState({ open: true });
  };

  closeSnackbar = ()=>{
    this.setState({open:false});
  }

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
                onChange={this.onUserNameChange.bind(this)}
              />
            </FormControl>
            <FormControl style={{ width: "100%" }}>
              <InputLabel htmlFor="adornment-password">Password</InputLabel>
              <Input
                style={{ width: "100%" }}
                fullWidth={true}
                id="adornment-password"
                type="password"
                onChange={this.onPasswordChange.bind(this)}
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <Button
                type='submit'
                variant="contained"
                color="primary"
                onClick={this.logIn.bind(this)}
              >
                Login
              </Button>
            </FormControl>
          </Grid>
          <Grid item xs={2} sm={3} md={4} lg={5} />
        </Grid>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.closeSnackbar.bind(this)}
          ContentProps={{
            'aria-describedby': 'message-id',
            'style':{backgroundColor: '#d32f2f'}
          }}
          message='Invalid Credentials'
        />
      </div>
    );
  }
}

export default LoginPage;
