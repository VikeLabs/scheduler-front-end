import React from 'react';
import Divider from 'atoms/Divider/Divider';
import { SigninBtn, SignupBtn, SiginupGoogleBtn, StyledTextField } from './styles';
import './SignUpForm.css';

const SignUpForm = () => {
  return (
    <form id="signup">
      <StyledTextField id="firstName" label="First Name" autoComplete="given-name" />
      <StyledTextField id="lastName" label="Last Name" autoComplete="family-name" />
      <StyledTextField id="email" label="Email" autoComplete="username" />
      <StyledTextField id="password" label="Password" type="password" autoComplete="current-password" />
      <StyledTextField id="confirm-password" label="Confirm Password" type="password" autoComplete="current-password" />
      <div className="btn-container">
        <SigninBtn href="/">Sign in instead</SigninBtn>
        <SignupBtn href="/main" variant="contained">
          Sign up
        </SignupBtn>
      </div>
      <Divider />
      <SiginupGoogleBtn href="/main">Sign up with Google</SiginupGoogleBtn>
    </form>
  );
};

export default SignUpForm;
