import React, { useState } from 'react'
import { Box, AppBar, Tabs, Tab, makeStyles, Hidden, MenuItem, Menu, ListItemText, withStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Dashboard from '../../../layout/Dashboard'
import MenuIcon from '@material-ui/icons/Menu';
import NewReservationsList from './NewReservationsList';

const useStyle = makeStyles((theme) => ({
  appBarArea: {
    '& .MuiAppBar-colorPrimary':{
        backgroundColor: 'transparent',        
        '& .MuiTouchRipple-root:hover':{
            outline: 'none'
        },
    },
    '& span': {
        color: '#000'
    },
    '& button':{
        margin: '0.5px'
    },
    '& .MuiTabs-indicator':{
        backgroundColor: 'transparent'
    },
    '& button:focus':{
        outline: 'none'
    },
    '@media(max-width: 768px )':{
      '& #simple-tabpanel-0 > div':{
        padding: '0px'
      }
    }
  },
  newRequest:{
    border: '2px solid #2880fb',
    '&.Mui-selected':{
        backgroundColor: '#2880fb',
        border: '1px solid #2880fb',
        '& span.MuiTab-wrapper':{
            color: '#fff'        
        }
    }
  },
  waittingRequest:{
    border: '2px solid #FF8925',
    '&.Mui-selected':{
        backgroundColor: '#FF8925',
        '& span.MuiTab-wrapper':{
            color: '#fff'        
        }
    }
  },
  acceptedRequest:{
    border: '2px solid #28CC8B',
    '&.Mui-selected':{
        backgroundColor: '#28CC8B',
        '& span.MuiTab-wrapper':{
            color: '#fff'        
        }
    }
  },
  workArea:{
    padding: '48px 16px 0px 16px !important',
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

const RequestsList = () => {
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

  console.log('no pasa nada')

  return (
    <Dashboard
        user = { pro }
        token = { access_token }
        isLoggedIn = {isLoggedIn}
    >
        <Box className={classes.appBarArea}>          
            <Hidden xsDown>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth" >
                    <Tab className={classes.newRequest} label="NOUVELLES DEMANDES(3)" {...a11yProps(0)} />
                    <Tab className={classes.waittingRequest} label="OFFRES EN ATTENTES(2)" {...a11yProps(1)} />
                    <Tab className={classes.acceptedRequest} label="OFFRES ACCEPTÉES(5)"   {...a11yProps(1)} />
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
                            <ListItemText primary="NOUVELLES DEMANDES(3)" onClick={e => onChangeMovile(e, 0)}/>
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemText primary="OFFRES EN ATTENTES(2)" onClick={e => onChangeMovile(e, 1)} />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemText primary="OFFRES ACCEPTÉES(5)" onClick={e => onChangeMovile(e, 2)} />
                        </StyledMenuItem>
                    </StyledMenu>
                </Box>
            </Hidden>

            <TabPanel value={value} index={0}>
                <Box className={classes.workArea}>
                    <NewReservationsList token={access_token} statusId="1"/>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box className={classes.workArea}>
                  <NewReservationsList token={access_token} statusId="2"/>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box className={classes.workArea}>
                  <NewReservationsList token={access_token} statusId="4"/>
                </Box>
            </TabPanel>
        </Box>
    </Dashboard>
  )
}

export default RequestsList