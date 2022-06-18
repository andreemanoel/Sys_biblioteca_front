import { Avatar, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { AddBox, Home, Person, MenuBook } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import React from 'react';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeaderIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  drawerHeaderImg: {
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 100,
  }
}));

const DrawerNavigation = ({open, handleDrawerClose, navigation}) => {
  const classes = useStyles();

  return (
    <Drawer 
      anchor='left'
      variant="persistent"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawer}>
        <div className={classes.drawerHeaderIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className={classes.drawerHeaderImg}>
          <Avatar 
            alt="Biblioteca Online" 
            src="https://thumbs.dreamstime.com/b/azul-do-logotipo-do-vetor-da-biblioteca-85746573.jpg" 
            className={classes.logo}
          />
        </div>
        <Divider />
        <ListItem button key="Home" onClick={() => navigation.push('/')}>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button key="Usuarios" onClick={() => navigation.push('/usuarios')}>
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText primary="Usuarios" />
        </ListItem>
        <ListItem button key="Adicionar Usuario" onClick={() => navigation.push('/adicionar/user')}>
          <ListItemIcon><AddBox /></ListItemIcon>
          <ListItemText primary="Adicionar" />
        </ListItem>
        <Divider />
        <ListItem button key="Livros" onClick={() => navigation.push('/livros')}>
          <ListItemIcon><MenuBook /></ListItemIcon>
          <ListItemText primary="Livros" />
        </ListItem>
        <ListItem button key="Adicionar Livro" onClick={() => navigation.push('/adicionar/livro')}>
          <ListItemIcon><AddBox /></ListItemIcon>
          <ListItemText primary="Adicionar" />
        </ListItem>
      </div>

    </Drawer>
  )
}

export default DrawerNavigation;