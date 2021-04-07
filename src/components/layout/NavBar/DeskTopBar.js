import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

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
    position: 'relative'
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const DeskTopBar = () => {
  const classes = useStyles();
  const [openItem, setOpenItem] = useState([]);
  const menu = config.SIDE_MENU_PRO;

  useEffect(()=>{
    const menuIni = () => {
      let openItem = [];
      for(let index in menu){
        if(menu[index].hasOwnProperty('subNav')){
          openItem[index] = false;
        }
      }
      setOpenItem(openItem);
    }
    menuIni();
  }, [menu])

  const handleClick = (e, ifDiv, openIndex) => {
    e.preventDefault()
    if(ifDiv){
      setOpenItem({...openItem, [openIndex]: !openItem[openIndex]});
    }
  }

  const displayMenu = (items) => {
    let html = [];
    
    for(let index in items){
      
      html.push(<ListItem onClick={e => handleClick(e, items[index].hasOwnProperty('subNav'), index) }>
                  <ListItemIcon>
                    <IconLibraryBooks />
                  </ListItemIcon>
                  <ListItemText primary={items[index].title} />
                  {
                    items[index].hasOwnProperty('subNav') 
                    ?
                      openItem[index] ? <IconExpandLess /> : <IconExpandMore />
                    :
                      ''
                  }
                </ListItem>);

      if(items[index].hasOwnProperty('subNav')){
        let content = []
        for(let i = 0; i < items[index].subNav.length; i++){
            content.push(<ListItem >
                          <ListItemText inset primary={ items[index].subNav[i].title } />
                        </ListItem>)
        }
        html.push(<Collapse in={openItem[index]} timeout="auto">
                    <Divider />
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
        
        <Divider />
        <List>
          { displayMenu(menu) }
        </List>

      </Drawer>
    </div>
  );
}

export default DeskTopBar;