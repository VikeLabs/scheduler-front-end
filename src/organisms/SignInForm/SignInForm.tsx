import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ForgotPwdBtn, SigninBtn, SigininGoogleBtn, StyledDivider, TextFieldPwd } from './styles';
import './SignInForm.css';

const SignInForm: React.FC = () => {
  return (
    <form id="signin">
      <TextField id="email" label="Email" autoComplete="username" />
      <TextFieldPwd id="password" label="Password" type="password" autoComplete="current-password" />
      <ForgotPwdBtn size="small">Forgot password?</ForgotPwdBtn>
      <SigninBtn href="/main" variant="contained">
        Sign in
      </SigninBtn>
      <div id="divider-container">
        <StyledDivider />
        <span className="divider-text">or</span>
        <StyledDivider />
      </div>
      <SigininGoogleBtn href="/main">Sign in with Google</SigininGoogleBtn>
    </form>
  );
};

export default SignInForm;
