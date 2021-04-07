import React from 'react';
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
  const [open, setOpen] = React.useState(false)

  const handleClick = e => {
    e.preventDefault()
    setOpen(!open)
  }
  console.log(config.SIDE_MENU_PRO)
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
            <ListItem onClick={e => handleClick(e) }>
                <ListItemIcon>
                    <IconLibraryBooks />
                </ListItemIcon>
                <ListItemText primary="Nested Pages" />
                {open ? <IconExpandLess /> : <IconExpandMore />}
            </ListItem>        
            <Collapse in={open} timeout="auto">
                <Divider />
                <List>
                <ListItem >
                    <ListItemText inset primary="Nested Page 1" />
                </ListItem>
                <ListItem >
                    <ListItemText inset primary="Nested Page 2" />
                </ListItem>
                </List>
            </Collapse>
            
        </List>

      </Drawer>
    </div>
  );
}

export default DeskTopBar;