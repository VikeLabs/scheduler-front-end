import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from 'organisms/SignInForm/SignInForm';
import SignUpForm from 'organisms/SignUpForm/SignUpForm';
import logo from 'assets/logo.png';
import { SignupBtn, StyledCard } from './styles';
import './Home.css';

const Home = props => {
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
    <main className="main-container">
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
    </main>
  );
};

Home.propTypes = {
  signin: PropTypes.bool.isRequired,
};

export default Home;
