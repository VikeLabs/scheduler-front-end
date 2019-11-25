import './navBar.css'
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface NavBarProps {
  // Define props in here
}

interface NavBarState {
  // Define state in here
}

export class NavBar extends React.Component<NavBarProps, NavBarState> {

  componentWillMount () {

  }

  componentDidMount () {

  }

  render () {
    return (
      <div>
        <AppBar>
          <Toolbar className='tool-bar'>
            <IconButton>
              <MenuIcon className='menu-icon'/>
            </IconButton>
            <Typography className='title'>
              Home
            </Typography>
            <Button id='button-login'>Login</Button>
            <Button id='button-login'>Contact Us</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
