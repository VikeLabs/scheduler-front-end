import React from 'react';
import SignInForm from '../../organisms/SignInForm/SignInForm';
import SignUpForm from '../../organisms/SignUpForm/SignUpForm';
import './Home.css';
import logo from '../../assets/logo.png';
import { SignupBtn, StyledCard } from './styles';

const Home: React.FC<{ signin: boolean }> = props => {
  const { signin } = props;
  const signinForm = (
    <>
      <SignInForm />
      <div className="signup-container">
        <span className="signup-text">New to Schedule Courses?</span>
        <SignupBtn href="/signup">Create Account</SignupBtn>
      </div>
    </>
  );
  const signupForm = (
    <>
      <SignUpForm />
    </>
  );
  return (
    <div className="main-container">
      <div className="left-container">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="right-container">
        <StyledCard>
          <h1>Schedule Courses</h1>
          <h3>Time Table Builder for UVic Students</h3>
          {signin ? signinForm : signupForm}
        </StyledCard>
      </div>
    </div>
  );
};

export default Home;
