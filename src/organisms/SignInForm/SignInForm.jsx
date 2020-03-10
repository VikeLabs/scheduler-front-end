import React from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from 'atoms/Divider/Divider';
import { ForgotPwdBtn, SigninBtn, SigininGoogleBtn, TextFieldPwd } from './styles';
import './SignInForm.css';

const SignInForm = () => {
  return (
    <form id="signin">
      <TextField id="email" label="Email" autoComplete="username" />
      <TextFieldPwd id="password" label="Password" type="password" autoComplete="current-password" />
      <ForgotPwdBtn size="small">Forgot password?</ForgotPwdBtn>
      <SigninBtn href="/main" variant="contained">
        Sign in
      </SigninBtn>
      <Divider />
      <SigininGoogleBtn href="/main">Sign in with Google</SigininGoogleBtn>
    </form>
  );
};

export default SignInForm;
