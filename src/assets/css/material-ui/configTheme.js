import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette:{
    primary:{
      main: '#2880fb'
    },
    secondary:{
      main: '#28cc8b'
    },
    tertiary:{
      main: '#6d6d6d'
    },
    alert: {
      error: '#f44336',
      success: '#28cc8b',
      info: '#2880fb',
      warning: '#fb9800'
    },
    sideMenuColor: {
      main: '#6d6d6d',
      visited: '#2880fb'
    }
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 8,
    h1: {
      fontSize: "88px",
      fontFamily: "Avenir_Black",
      color: "#000",

      '@media (max-width:1600px)': { 
        fontSize: "55px",
      },
      '@media (max-width:1200px)': { 
        fontSize: "55px",
      },
      '@media (max-width:599px)': { 
        fontSize: "40px",
      }
    },
    h2: {
      fontSize: "35px",
      fontFamily: "Avenir_Black",
      margin: 0,
      textAlign: "center",
      
      '@media (max-width:599px)': { 
        fontSize: "20px",
      }
    },
    h3: {
      fontSize: "28px",
      fontFamily: "Avenir_Black",
      marginBottom: '29px',
      
      '@media (max-width:599px)': { 
        fontSize: "18px",
      }
    },
    h4: {
      fontSize: "24px",
      fontFamily: "Avenir_Black",
      
      '@media (max-width:599px)': {
        fontSize: "14px",
      }
    },
    h5: {
      fontSize: "25px",
      fontFamily: "Avenir_Black",
      margin: 0,
      color: "#fff",

      '@media (max-width:768px)': { 
        fontSize: "15px",
      }
    },
    h6: {
      fontSize: '1.6rem',
      color: '#6d6d6d',
      '@media (max-width:768px)': { 
        fontSize: "1.4rem",
      }
    },
    p: {
      fontSize: '25px',
      fontFamily: "Avenir_Black",
    
      '@media (max-width:599px)': { 
        fontSize: "15px",
      }
    },
  }
});

export default theme;
