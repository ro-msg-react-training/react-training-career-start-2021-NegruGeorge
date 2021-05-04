import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["sans-serif", "Open Sans"],
    fontWeightBold: 400,
    fontSize: 20,
  },

  palette: {
    primary: {
      main: "#a01441",
      secondary: blue,
    },
  },
});

export default theme;
