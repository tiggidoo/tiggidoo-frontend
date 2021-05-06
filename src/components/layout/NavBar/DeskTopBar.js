import React, { useEffect, useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Box, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom"

import Avatar from '@material-ui/core/Avatar';
import config from '../../../config.json'

const drawerWidth = '100%';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiListItemIcon-root': {
      minWidth: '40px'
    },
    '& .MuiListItem-gutters': {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    },
    '& a:hover':{
      textDecoration: 'none'
    },
    '& a.MuiTypography-colorPrimary':{
      color: theme.palette.sideMenuColor.main
    },
    '& span.MuiTypography-displayBlock':{
      color: theme.palette.sideMenuColor.main
    }
  },
  drawerPaper: {
    width: drawerWidth,
    left: 'inherit',
    top: 'inherit',
    position: 'relative',
    border: 'none',
    zIndex: '1'
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  selected: {
    color: theme.palette.primary.main
  },
  dimentionAvatar: {
    width: '120px',
    height: '120px',
    margin: theme.spacing(4, 0, 5, 2),
    '@media (max-width:1200px)': { 
      margin: theme.spacing(8, 0, 3, 2),
    },
  },
  bgkMenu: {
    backgroundColor: '#fff',
    height: '100%',
    padding: theme.spacing(1),
    borderRadius: '4px',
    minHeight: '80vh',
    marginBottom: theme.spacing(3)
  }
}));

const DeskTopBar = ({ urlAvatar }) => {
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState([]);
  const [menuItemOpens, setMenuItemOpens] = useState("DEMANDES");
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

  //console.log(menuItemOpens);

  const displayMenu = (items) => {
    let html = [];
    
    for(let index in items){
      
      let img = "gris";
      if(index === menuItemOpens){
        img = "bleu";
      }
      
      const selected = {
        color: (index === menuItemOpens) ? "#2880fb" : '',
        fontWeight: (index === menuItemOpens) ? "bold" : '100'
      };
      
      let menuTitle = [];
      if(!items[index].hasOwnProperty('subNav')){
        menuTitle.push(<Link key={`ListItemLink${index}`} to={ items[index].itemId } ><ListItemText primary={items[index].title} primaryTypographyProps={{ style: selected }} /></Link>)
      }else{
        menuTitle.push(<ListItemText key={`ListItemTextNav${index}`}  primary={items[index].title} primaryTypographyProps={{ style: selected }} />)
      }

      html.push(<ListItem button key={`ListItem${index}`} onClick={e => handleClick(e, index) }>
                  <ListItemIcon>
                    <img key={index} width="32px" src={"/images/lateral_menu/" + items[index].img + "-" + img + ".svg"} alt="" />
                  </ListItemIcon>
                  { menuTitle }
                </ListItem>);

      if(items[index].hasOwnProperty('subNav')){
        let content = []
        for(let i = 0; i < items[index].subNav.length; i++){
            content.push(<ListItem button key={`ListItemSuvNav${i}`}>                          
                            <Link to={ items[index].subNav[i].itemId }><ListItemText inset secondary={ items[index].subNav[i].title } /></Link>
                        </ListItem>)
        }
        html.push(<Collapse key={`Collapse${index}`} in={menuItems[index]} timeout="auto">
                    <List>
                      {content}
                    </List>
                  </Collapse>)
      }
    }
    return html;
  } 

  return (
    <Box className={ classes.bgkMenu } >
      <Avatar className={ classes.dimentionAvatar } alt="Remy Sharp" src={urlAvatar} />
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
    </Box>
  );
}

export default DeskTopBar;