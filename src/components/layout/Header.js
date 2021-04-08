import React from 'react'
import { Box, Container, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  headerBakgroundColor: {
    backgroundColor: theme.palette.primary.main,
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
    <Box className = { classes.headerBakgroundColor }>
      <Container maxWidth="lg">
        <Box className={classes.header}>
          <Box>
            <img src="/images/logo_tiggidoo_white.svg" alt="" />
          </Box>
          <Box>
            <Typography component="h2" variant="h5" style={{color: "#fff"}}>Marie-France</Typography>
          </Box>    
        </Box>
      </Container>
    </Box>
  )

}

export default Header;