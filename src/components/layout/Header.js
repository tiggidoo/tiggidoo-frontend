import React from 'react'
import { Box, Container, makeStyles, Typography, AppBar, Toolbar } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  headerBakgroundColor: {
    backgroundColor: theme.palette.primary.main,
    width: '100%'
  },
  barHeader: {
      
      "@media (max-width: 992px)": {
        paddingLeft: 0,
      },
    
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
    '& img':{
      height: '3.6rem',      
      margin: '1rem'
    },
    backgroundColor: theme.palette.primary.main,
    '@media (min-width:600px)': { 
      '& img':{
        height: '7rem',      
        margin: '1.5rem'
      },
    }
  }
}))

const Header = () => {
  const classes = useStyle();
  return (
      <AppBar>
        <Toolbar>
          <Box className = { classes.headerBakgroundColor }>
            <Box className={classes.header}>
              <Box>
                <img src="/images/logo_tiggidoo_white.svg" alt="" />
              </Box>
              <Box>
                <Typography component="h2" variant="h5" style={{color: "#fff"}}>Marie-France</Typography>
              </Box>    
            </Box>
            </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Header;