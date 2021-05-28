import React, { useState } from 'react'
import { Box, AppBar, Tabs, Tab, makeStyles, Hidden, MenuItem, Menu, ListItemText, withStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Dashboard from '../../../layout/Dashboard'
import MenuIcon from '@material-ui/icons/Menu';
import Data from './Data';
import MyCriteria from './MyCriteria';

const useStyle = makeStyles((theme) => ({
  appBarArea: {
    '& .MuiBox-root': {
      padding: '0px'
    },
    '& .MuiTab-root': {
      '@media(max-width: 600px)':{
        fontSize: '1.5rem',
        padding: '0'
      }
    }
  },
  workArea:{
    padding: '32px 10px 0px 10px !important',
    '@media(max-width: 600px)':{
      padding: '32px 0px 0px 0px !important',
    }
  },
  menuMovile:{
    padding: '0',
    position: 'absolute',
    right: 5,
    bottom: '70px',
    zIndex: '1'
  }
}))

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Info = () => {
  const classes = useStyle()
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const { auth:{pro, access_token, isLoggedIn} } = useSelector(
    state => ({
        auth: state.auth
    })
  ) 

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };    
  
  const onChangeMovile = (e, value) => {
    e.preventDefault();
    setValue(value);
    setAnchorEl(null);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    console.log(pro);

    return (
        <Dashboard
            user = { pro }
            token = { access_token }
            isLoggedIn = {isLoggedIn}
        >
            <Box className={classes.appBarArea}>
                <Hidden xsDown>
                  <AppBar position="static">
                      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
                          <Tab label="Mes Informations" {...a11yProps(0)} />
                          <Tab label="Mes Criteres" {...a11yProps(1)} />
                      </Tabs>
                  </AppBar>
                </Hidden>
                <Hidden smUp>
                  <Box className={classes.menuMovile}>
                    <MenuIcon onClick={handleClick} style={{background: '#2ebe9f', color: '#fff'}} />
                    <StyledMenu
                      id="customized-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <StyledMenuItem>
                        <ListItemText primary="Mes Informations" onClick={e => onChangeMovile(e, 0)}/>
                      </StyledMenuItem>
                      <StyledMenuItem>
                        <ListItemText primary="Mes Criteres" onClick={e => onChangeMovile(e, 1)} />
                      </StyledMenuItem>
                    </StyledMenu>

                  </Box>
                </Hidden>

                <TabPanel value={value} index={0}>
                  <Box className={classes.workArea}>
                    <Data auth={pro} />
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Box className={classes.workArea}>
                    <MyCriteria />
                  </Box>
                </TabPanel>
            </Box>
        </Dashboard>
    )
}

export default Info