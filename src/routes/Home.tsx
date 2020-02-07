import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import logo from '../assets/logo.png';
import './Home.css';

const ForgotPwdBtn = styled(Button)({
  color: 'lightslategrey',
  marginLeft: 'auto',
  marginTop: '2px',
  textTransform: 'none',
  width: 'fit-content',
});

const TextFieldPwd = styled(TextField)({
  marginTop: '8px',
});

const SigninBtn = styled(Button)({
  backgroundColor: 'midnightblue',
  color: 'white',
  margin: '8px auto',
  padding: '6px 36px',
  width: 'fit-content',
});

const SigininGoogleBtn = styled(Button)({
  textTransform: 'none',
});

const SignUpBtn = styled(Button)({
  color: 'cornflowerblue',
  textTransform: 'none',
});

const StyledCard = styled(Card)({
  margin: 'auto',
  maxWidth: '400px',
  padding: '0 38px 24px 38px',
  textAlign: 'center',
});

const StyledDivider = styled(Divider)({
  width: '80px',
});

const Home: React.FC = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="right-container">
        <StyledCard>
          <h1>Schedule Courses</h1>
          <h3>Time Table Builder for UVic Students</h3>
          <form id="signin">
            <TextField id="email" label="Email" />
            <TextFieldPwd id="password" label="Password" type="password" />
            <ForgotPwdBtn size="small">Forgot password?</ForgotPwdBtn>
            <SigninBtn variant="contained">Sign in</SigninBtn>
            <div id="divider-container">
              <StyledDivider />
              <span className="divider-text">or</span>
              <StyledDivider />
            </div>
            <SigininGoogleBtn>Sign in with Google</SigininGoogleBtn>
          </form>
          <div className="signup-container">
            <span className="signup-text">New to Schedule Courses?</span>
            <SignUpBtn href="/signup">Create Account</SignUpBtn>
          </div>
        </StyledCard>
      </div>
    </div>
  );
};

export default Home;
