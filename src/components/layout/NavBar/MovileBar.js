import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import config from '../../../config.json'
import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((thme) => ({
  btnsArea:{
    '& .MuiBottomNavigationAction-label':{
      fontSize: '1rem'
    }
  }
}))

export default function MovileBar() {
  const classes = useStyle(); 
  const [value, setValue] = React.useState(0);
  const menu = config.SIDE_MENU_PRO;
  
  const displayMenu = (items) => {
    let html = [];
    
    for(let index in items){
      html.push(<BottomNavigationAction label={items[index].movileTitle} icon={<img key={index} src={"/images/lateral_menu/" + items[index].img + "-gris.svg"} alt="" />} />)      
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