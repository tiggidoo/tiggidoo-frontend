import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Box, makeStyles, Menu, MenuItem } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom"
import config from '../../../config.json'

const useStyle = makeStyles((thme) => ({
  btnsArea:{
    '& .MuiBottomNavigationAction-label':{
      fontSize: '1.3rem'
    },
    '& .MuiBottomNavigationAction-root': {
      padding: '0',
      minWidth: '60px'
    },
    '& .MuiBottomNavigation-root': {
      height: '65px'
    }
  },
  subMenu:{
    '& .MuiMenuItem-root': {
      fontSize: '1.4rem',
    },
    '& a': {
      textDecoration: 'none',
      color: '#000'
    }
  }
}))

const ITEM_HEIGHT = 48;

export default function MovileBar() {
  const classes = useStyle(); 
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState({
    anchor: null,
    chosenOption: ''
  });
  const history = useHistory();
  const { anchor, chosenOption } = anchorEl;
  const open = Boolean(anchorEl.anchor);
  const menu = config.SIDE_MENU_PRO;
  
  const handleClose = () => {
    setAnchorEl({
      anchor: null,
      chosenOption: ''
    });
  };

  const handleClick = (e, index, redirect) => {
    if(redirect === null){
      setAnchorEl({
        'anchor': e.currentTarget,
        'chosenOption': index
      });
    }else{
      history.push(redirect)
    }
  };

  const displayMenu = (items) => {

    let html = [];
    let menuNav = []
    let i = 0;

    for(let index in items){
      let redirect = items[index].itemId;

      if(items[index].hasOwnProperty('subNav')){
        if(chosenOption === index){  
          menuNav.push(
            <Menu
              id={items[index].itemId}
              key={'menu'+chosenOption}
              anchorEl={anchor}
              keepMounted
              open={open}
              onClose={handleClose}
              className={classes.subMenu}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '25ch',
                },
              }}
            >
              {items[index].subNav.map((option) => (
                <MenuItem key={option.title}>
                  <Link to = {option.itemId} >
                    {option.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          )
        }
        redirect = null
      }

      html.push(
        <BottomNavigationAction 
          onClick = { e => handleClick(e, index, redirect) } 
          key = { items[index].movileTitle } 
          label = { items[index].movileTitle } 
          icon = {
            <img width='30px' key={index} src={"/images/lateral_menu/" + items[index].img + "-" + ((i === value) ? "bleu" : "gris") + ".svg"} alt="" /> 
          } 
        />
      )
      html.push(menuNav)

      i++;
    }
    return html;
  } 
  return (
    <Box className={classes.btnsArea}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      > 
        { displayMenu(menu) }
      </BottomNavigation>
    </Box>
  );
}