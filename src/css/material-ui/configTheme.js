import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#2880fb'
    },
    secondary:{
      main: '#28cc8b'
    }
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 8,
    h1: {
      fontSize: "4.5rem",
      fontFamily: "Righteous",
      '@media (max-width:1600px)': { 
        fontSize: "3.4rem",
      },
      '@media (max-width:1200px)': { 
        fontSize: "2.5rem",
      }
    },
    h2: {
      fontSize: "3.5rem",
      fontFamily: "Righteous",
      margin: 0,
      '@media (max-width:1600px)': { 
        fontSize: "3rem",
      },
      '@media (max-width:1200px)': { 
        fontSize: "2rem",
      }
    },
    h3: {
      fontSize: "3rem",
      fontFamily: "sans-serif",
      margin: 0,
      '@media (max-width:1600px)': { 
        fontSize: "2.5rem",
      },
      '@media (max-width:1200px)': { 
        fontSize: "2.1rem",
      }
    },
    h4: {
      fontSize: "2.5rem",
      fontFamily: "sans-serif",
      margin: 0,
      '@media (max-width:1600px)': { 
        fontSize: "1.8rem",
      }
    },
    h5: {
      fontSize: "2rem",
      color: "#4D4D4D",
      fontFamily: "sans-serif",
      fontWeight: 'bold',
      margin: 0,
      '@media (max-width:768px)': { 
        fontSize: "1.6rem",
      }
    },
    h6: {
      fontSize: '1.5rem',
      '@media (max-width:768px)': { 
        fontSize: "1rem",
      }
    },
    p: {
      fontSize: '2.4rem',
      '@media (max-width:1600px)': { 
        fontSize: "2rem",
        },
      '@media (max-width:1200px)': { 
        fontSize: "1.6rem",
      }
    },
  }
});

export default theme;
