import React from 'react';
import { StyledNavBar, StyledToolbar } from './styles';
import './Navbar.css';

const NavBar: React.FC = () => {
  return (
    <StyledNavBar position="static">
      <StyledToolbar>
        <a href="https://vikelabs.ca/">
          <h3 className="header">VikeLabs</h3>
        </a>
        &nbsp;
        <h3 className="header"> / Scheduler</h3>
      </StyledToolbar>
    </StyledNavBar>
  );
};

export default NavBar;
