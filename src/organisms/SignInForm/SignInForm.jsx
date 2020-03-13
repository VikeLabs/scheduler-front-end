import React, { PureComponent } from 'react';
import { Auth } from 'aws-amplify';
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
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = async event => {
    const { email, password } = this.state;
    event.preventDefault();
    try {
      await Auth.signIn(email, password);
    } catch (error) {
      if (error.code === 'UserNotConfirmedException') {
        // TODO resend confirmation email
      } else if (
        error.code === 'NotAuthorizedException' ||
        error.code === 'UserNotFoundException'
      ) {
        // TODO display error
      }
    }
  };

  render() {
    return (
      <form id="signin" onSubmit={this.handleSubmit}>
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
        <SigninBtn type="submit" variant="contained">
          Sign in
        </SigninBtn>
        <Divider />
        <SigininGoogleBtn href="/main">Sign in with Google</SigininGoogleBtn>
      </form>
    );
  }
}

export default SignInForm;
