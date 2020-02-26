import React from 'react';
import Divider from 'atoms/Divider/Divider';
import { SigninBtn, SignupBtn, SiginupGoogleBtn, StyledTextField } from './styles';
import './SignUpForm.css';
import { useEmailForm } from '../InputForm/useEmailForm';
import { usePasswordForm } from '../InputForm/usePasswordForm';


const SignUpForm: React.FC = () => {
  const [email, emailInvalid, emailErrorMessage, onChangeEmail] = useEmailForm();
  const [password, passwordInvalid, passwordErrorMessage, onChangePassword] = usePasswordForm();
  return (
    <form id="signup">
      <StyledTextField id="firstName" label="First Name" autoComplete="given-name" />
      <StyledTextField id="lastName" label="Last Name" autoComplete="family-name" />
      <span className="error-text">{emailErrorMessage}</span>
      <StyledTextField id="email" label="Email" autoComplete="username" value={email} 
          onChange={(e) => {
            const newValue = e.target.value;
            onChangeEmail(newValue);
          }}/>
      <span className="error-text">{passwordErrorMessage}</span>
      <StyledTextField id="password" label="Password" type="password" 
          value={password} autoComplete="current-password"
          onChange={(e) => {
            const newValue = e.target.value;
            onChangePassword(newValue);
          }}/>
      <StyledTextField id="confirm-password" label="Confirm Password" type="password" autoComplete="current-password" />
      <div className="btn-container">
        <SigninBtn href="/">Sign in instead</SigninBtn>
        <SignupBtn href="/main" variant="contained" disabled={emailInvalid || passwordInvalid}>
          Sign up
        </SignupBtn>
      </div>
      <Divider />
      <SiginupGoogleBtn href="/main">Sign up with Google</SiginupGoogleBtn>
    </form>
  );
};

export default SignUpForm;
