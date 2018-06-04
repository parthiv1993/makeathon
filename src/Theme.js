import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

export default createMuiTheme({
  palette: {
    primary: {
      light: "#42A5F5",
      main: "#1976D2",
      dark: "#0D47A1",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#76FF03",
      dark: "#ba000d",
      contrastText: "#fff"
    }
  }
});
