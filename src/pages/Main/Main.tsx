import React from 'react';
import NavBar from 'molecules/NavBar/NavBar';
import SemTabs from 'molecules/SemTabs/SemTabs';
import Calendar from 'atoms/Calendar/Calendar';
import './Main.css';

const Main: React.FC = () => {
  return (
    <>
      <NavBar />
      <div id="main-container">
        <div id="left-container">
          <SemTabs />
        </div>
        <div id="right-container">
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default Main;
