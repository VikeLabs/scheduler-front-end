import React, { PureComponent } from 'react';
import * as yup from 'yup';
import { signUpSchema } from 'atoms/ValidationSchemas';
import Divider from 'atoms/Divider/Divider';
import { SigninBtn, SignupBtn, SiginupGoogleBtn, StyledTextField } from './styles';
import './SignUpForm.css';

class SignUpForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: null,
      pw1: null,
      pw2: null,
      error: {
        email: false,
        pw1: null,
      },
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  setFieldError = (name, value) => {
    this.setState(prev => ({ error: { ...prev.error, [name]: value } }));
  };

  validateFirstName = async () => {
    const { firstName } = this.state;
    try {
      await yup.reach(signUpSchema, 'firstName').validate(firstName);
      this.setFieldError('firstName', null);
    } catch (error) {
      this.setFieldError('firstName', error.message);
    }
  };

  validateLastName = async () => {
    const { lastName } = this.state;
    try {
      await yup.reach(signUpSchema, 'lastName').validate(lastName);
      this.setFieldError('lastName', null);
    } catch (error) {
      this.setFieldError('lastName', error.message);
    }
  };

  validateEmail = async () => {
    const { email } = this.state;
    if (!email) return;
    try {
      await yup.reach(signUpSchema, 'email').validate(email);
      this.setFieldError('email', null);
    } catch (error) {
      this.setFieldError('email', error.message);
    }
  };

  validatePasswords = async () => {
    const { pw1, pw2 } = this.state;
    if (!pw1) return;
    // Check the password meets the 8 character requirement
    try {
      await yup.reach(signUpSchema, 'password').validate(pw1);
      this.setFieldError('pw1', null);
    } catch (error) {
      this.setFieldError('pw1', error.message);
    }

    if (!pw2) return;
    // Check that the passwords match once both entered
    try {
      // Need to provide both passwords inorder to confirm match
      await signUpSchema.validate({ password: pw1, confirmPassword: pw2 });
      this.setFieldError('pw2', null);
    } catch (error) {
      const { message } = error;
      // Validation the entire schema can return other errors, only set the error if
      // it is for the confirmPassword field
      if (message.includes('match') || message.includes('confirm')) {
        this.setFieldError('pw2', error.message);
      }
    }
  };

  render() {
    const { error } = this.state;
    return (
      <form id="signup">
        <StyledTextField
          id="firstName"
          label="First Name"
          autoComplete="given-name"
          error={!!error.firstName}
          helperText={error.firstName}
          onChange={this.handleChange('firstName')}
          onBlur={this.validateFirstName}
        />
        <StyledTextField
          id="lastName"
          label="Last Name"
          autoComplete="family-name"
          error={!!error.lastName}
          helperText={error.lastName}
          onChange={this.handleChange('lastName')}
          onBlur={this.validateLastName}
        />
        <StyledTextField
          id="email"
          label="Email"
          autoComplete="username"
          error={!!error.email}
          helperText={error.email}
          onChange={this.handleChange('email')}
          onBlur={this.validateEmail}
        />
        <StyledTextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          error={!!error.pw1}
          helperText={error.pw1}
          onChange={this.handleChange('pw1')}
          onBlur={this.validatePasswords}
        />
        <StyledTextField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          error={!!error.pw2}
          helperText={error.pw2}
          onChange={this.handleChange('pw2')}
          onBlur={this.validatePasswords}
        />
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
  }
}

export default SignUpForm;
