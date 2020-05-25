import React from 'react';
import Divider from 'atoms/Divider/Divider';
import { SigninBtn, SignupBtn, SiginupGoogleBtn, StyledTextField } from './styles';
import './SignUpForm.css';

const SignUpForm = () => {
  return (
    <section className="signup">
      <form id="signup">
        <StyledTextField id="firstName" label="First Name" type="text" autoComplete="given-name" />
        <StyledTextField id="lastName" label="Last Name" type="text" autoComplete="family-name" />
        <StyledTextField id="email" label="Email" type="email" autoComplete="email" />
        <StyledTextField id="password" label="Password" type="password" autoComplete="current-password" />
        <StyledTextField id="confirm-password" label="Confirm Password" type="password" autoComplete="current-password" />
        <SignupBtn variant="contained">
          Sign up
        </SignupBtn>
      </form>
      <Divider />
      <SiginupGoogleBtn href="/">Sign up with Google</SiginupGoogleBtn>
      <div className="signin-container">
        <p className="signin-text">
          Already have an account? <SigninBtn href="/">Sign in</SigninBtn>
        </p>
      </div>
    </section>
  );
};

export default SignUpForm;
