import React from 'react';
import Divider from 'atoms/Divider/Divider';
import { ForgotPwdBtn, SigninBtn, SignupBtn, SigininGoogleBtn, StyledTextField } from './styles';
import './SignInForm.css';

const SignInForm = () => {
  return (
    <section className="signin">
      <form id="signin">
        <StyledTextField id="email" label="Email" type="email" autoComplete="username" />
        <StyledTextField id="password" label="Password" type="password" autoComplete="current-password" />
        <ForgotPwdBtn href="/" size="small">Forgot your password?</ForgotPwdBtn>
        <SigninBtn variant="contained">
          Sign in
        </SigninBtn>
      </form>
      <Divider />
      <SigininGoogleBtn href="/">Sign in with Google</SigininGoogleBtn>
      <div className="signup-container">
        <p className="signup-text">
          New to Schedule Courses? <SignupBtn href="/signup">Create an Account</SignupBtn>
        </p>
      </div>
    </section>
  );
};

export default SignInForm;
