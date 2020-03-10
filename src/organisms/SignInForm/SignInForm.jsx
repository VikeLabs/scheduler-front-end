import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from 'atoms/Divider/Divider';
import { ForgotPwdBtn, SigninBtn, SigininGoogleBtn, TextFieldPwd } from './styles';
import './SignInForm.css';

class SignInForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  handleChange = name => event => {
    this.state({ [name]: event.target.value });
  };

  render() {
    return (
      <form id="signin">
        <TextField
          id="email"
          label="Email"
          autoComplete="username"
          onChange={this.handleChange('email')}
        />
        <TextFieldPwd
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={this.handleChange('password')}
        />
        <ForgotPwdBtn size="small">Forgot password?</ForgotPwdBtn>
        <SigninBtn href="/main" variant="contained">
          Sign in
        </SigninBtn>
        <Divider />
        <SigininGoogleBtn href="/main">Sign in with Google</SigininGoogleBtn>
      </form>
    );
  }
}

export default SignInForm;
