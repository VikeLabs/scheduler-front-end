import React from 'react';
import NavBar from 'molecules/NavBar/NavBar';
import SemesterTabs from 'molecules/SemesterTabs/SemesterTabs';
import Calendar from 'atoms/Calendar/Calendar';
import Dropdown from '../../atoms/Calendar/Dropdown';
import './Main.css';

const Main: React.FC = () => {
  return (
    <>
      <NavBar />
      <div id="main-container">
        <div id="left-container">
          <SemesterTabs />
        </div>
        <div id="right-container">
          <Dropdown />
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default Main;
