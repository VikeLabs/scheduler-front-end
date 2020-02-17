import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { StyledNavBar } from './styles';

const NavBar: React.FC = () => {
  return (
    <StyledNavBar position="static">
      <Toolbar>
        <h2>VikeLabs / </h2>
        &nbsp;
        <h3> Scheduler</h3>
      </Toolbar>
    </StyledNavBar>
  );
};

export default NavBar;
