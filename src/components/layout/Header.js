import React from 'react'
import { Box, makeStyles, Typography, AppBar, Toolbar } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import AlertMessage from '../layout/AlertMessage';


const useStyle = makeStyles((theme) => ({
  headerBakgroundColor: {
    backgroundColor: theme.palette.primary.main,
    width: '100%'
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center"    
  },
  imgWidth: {
    '& img':{
      height: '3.3rem',      
      margin: theme.spacing(0)
    },
    '@media (min-width:993px)': { 
      '& img':{
        height: '7rem',      
        margin: theme.spacing(2)
      },
    }    
  },
  avatarStyle :{
    '@media (min-width: 993px)':{
      display: 'none'
    }
  }
}))

const Header = ({ name, urlAvatar }) => {
  const classes = useStyle();
  return (
      <AppBar>
        <Toolbar>
          <Box className = { classes.headerBakgroundColor }>
            <AlertMessage />
            <Box className={classes.header}>
              <Box className={classes.imgWidth}>
                <img src="/images/logo_tiggidoo_white.svg" alt="" />
              </Box>
              <Box className = {classes.avatarStyle}>
                <Avatar alt={ name } src={urlAvatar} />
              </Box>
              <Box>
                <Typography component="h2" variant="h5" style={{color: "#fff"}}>{ name }</Typography>
              </Box>    
            </Box>
            </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Header;