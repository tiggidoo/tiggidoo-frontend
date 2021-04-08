import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

import config from '../../../config.json'

const drawerWidth = '100%';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    left: 'inherit',
    top: 'inherit',
    position: 'relative',
    border: 'none'
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  selected: {
    color: theme.palette.primary.main
  }
}));

const DeskTopBar = () => {
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState([]);
  const [menuItemOpens, setMenuItemOpens] = useState('DEMANDES');
  const menu = config.SIDE_MENU_PRO;

  useEffect(()=>{
    const menuIni = () => {
      let items = [];
      for(let index in menu){
        //if(menu[index].hasOwnProperty('subNav')){
          items[index] = false;
        //}
      }
      setMenuItems(items);
    }
    menuIni();
  }, [menu])

  const handleClick = (e, menuItemName) => {
    e.preventDefault()
    setMenuItems({...menuItems, [menuItemName]: !menuItems[menuItemName]});
    setMenuItemOpens(menuItemName);
  }

  const displayMenu = (items) => {
    let html = [];
    
    for(let index in items){
      
      let img = "gris";
      if(index === menuItemOpens){
        img = "bleu";
      }
      
      const selected = {
        color: (index === menuItemOpens) ? "#2880fb" : ''
      };

      html.push(<ListItem onClick={e => handleClick(e, index) }>
                  <ListItemIcon>
                    <img key={index} src={"/images/lateral_menu/" + items[index].img + "-" + img + ".svg"} alt="" />
                  </ListItemIcon>
                  <ListItemText primary={items[index].title} primaryTypographyProps={{ style: selected }} />
                  {
                    items[index].hasOwnProperty('subNav') 
                    ?
                      menuItems[index] ? <IconExpandLess /> : <IconExpandMore />
                    :
                      ''
                  }
                </ListItem>);

      if(items[index].hasOwnProperty('subNav')){
        let content = []
        for(let i = 0; i < items[index].subNav.length; i++){
            content.push(<ListItem >
                          <ListItemText inset secondary={ items[index].subNav[i].title } />
                        </ListItem>)
        }
        html.push(<Collapse in={menuItems[index]} timeout="auto">
                    <List>
                      {content}
                    </List>
                  </Collapse>)
      }
    }
    return html;
  } 

  
  
  return (
    <div>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          { displayMenu(menu) }
        </List>

      </Drawer>
    </div>
  );
}

export default DeskTopBar;