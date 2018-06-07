import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';

class ButtonAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      drawer :false
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuChanged = page => {
    this.handleClose();
    this.props.setPageOpen(page);
  };

  toggleDrawer(open) {
    this.setState({drawer: open});
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const sideList = (
      <div style={{width: 250}}>
        <List>
          <div>
            <ListItem button>
              <ListItemText primary="Dashboard" onClick={this.handleMenuChanged.bind(this,"dashboard")}/>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Configurations" onClick={this.handleMenuChanged.bind(this,"configurations")}/>
            </ListItem>
            <ListItem button>
              <ListItemText primary="Orders" onClick={this.handleMenuChanged.bind(this,"orders")}/>
            </ListItem>
          </div>
        </List>
      </div>
    );

    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {this.props.isLoggedIn &&
            <div>
            <IconButton style={{marginLeft: -12,marginRight: 20,}} color="inherit" aria-label="Menu" onClick={this.toggleDrawer.bind(this,true)}>
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.drawer} onClose={this.toggleDrawer.bind(this,false)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer.bind(this,false)}
                onKeyDown={this.toggleDrawer.bind(this,false)}
              >
                {sideList}
              </div>
            </Drawer>
            </div>
            }
            <Typography
              variant="title"
              color="inherit"
              style={{ flex: 1 }}
              onClick={this.handleMenuChanged.bind(this, "dashboard")}
            >
              Smart Refrigerator
            </Typography>
            {!this.props.isLoggedIn && (
              <Button color="inherit">Register</Button>
            )}

            {this.props.isLoggedIn && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <Avatar>U</Avatar>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem
                    onClick={this.handleMenuChanged.bind(
                      this,
                      "configurations"
                    )}
                  >
                    Configurations
                  </MenuItem>
                  <MenuItem
                    onClick={this.handleMenuChanged.bind(this, "orders")}
                  >
                    Orders
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default ButtonAppBar;
