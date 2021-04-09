import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

import config from '../../../config.json'
import { Box, makeStyles } from '@material-ui/core';

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
  }
}))

export default function MovileBar() {
  const classes = useStyle(); 
  const [value, setValue] = React.useState(0);
  const menu = config.SIDE_MENU_PRO;
  
  const displayMenu = (items) => {

    let html = [];
    let i = 0;
    for(let index in items){
      html.push(<BottomNavigationAction key={index} label={items[index].movileTitle} icon={<img width='30px' key={index} src={"/images/lateral_menu/" + items[index].img + "-" + ((i === value) ? "bleu" : "gris") + ".svg"} alt="" />} />)
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