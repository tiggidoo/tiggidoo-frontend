import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 8,
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Righteous",
    },
    h2: {
      fontSize: "3.5rem",
      fontFamily: "Righteous",
      margin: 0,
    },
    h3: {
      fontSize: "3rem",
      fontFamily: "sans-serif",
      margin: 0,
    },
    h4: {
      fontSize: "2.5rem",
      fontFamily: "sans-serif",
      margin: 0,
    },
    h5: {
      fontSize: "2rem",
      color: "#4D4D4D",
      fontFamily: "sans-serif",
      fontWeight: 'bold',
      margin: 0,
    },
    h6: {
      fontSize: '1.5rem',
    },
    p: {
      fontSize: '8rem',
    },
  }
});

export default theme;
