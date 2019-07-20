import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#32374C"
    },
    background: {
      default: "#292D3E"
    },

    type: "dark"
  }
});

export default theme;
