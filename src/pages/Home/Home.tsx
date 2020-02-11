import React from 'react';
import SignInForm from '../../organisms/SignInForm/SignInForm';
import './Home.css';
import logo from '../../assets/logo.png';
import { SignUpBtn, StyledCard } from './styles';

const Home: React.FC = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="right-container">
        <StyledCard>
          <h1>Schedule Courses</h1>
          <h3>Time Table Builder for UVic Students</h3>
          <SignInForm />
          <div className="signup-container">
            <span className="signup-text">New to Schedule Courses?</span>
            <SignUpBtn href="/signup">Create Account</SignUpBtn>
          </div>
        </StyledCard>
      </div>
    </div>
  );
};

export default Home;
