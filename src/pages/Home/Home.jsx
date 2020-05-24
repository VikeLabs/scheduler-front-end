import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import SignInForm from 'organisms/SignInForm/SignInForm';
import SignUpForm from 'organisms/SignUpForm/SignUpForm';
import logo from 'assets/logo.png';
import { StyledCard } from './styles';
import './Home.css';

const Home = props => {
  const { signin } = props;
  const signinForm = (
    <>
      <SignInForm />
    </>
  );
  const signupForm = (
    <>
      <SignUpForm />
    </>
  );
  return (
    <Grid container component="main" className="home-page">
      <CssBaseline />
      <Grid item xs={12} sm={12} md={6} component="section" className="left-section">
        <img src={logo} alt="Vike Labs" />
      </Grid>
      <Grid item xs={12} sm={12} md={6} component="section" className="right-section">
        <div className="form-section">
          <StyledCard>
            <h1>Schedule Courses</h1>
            <h3>Time Table Builder for UVic Students</h3>
            {signin ? signinForm : signupForm}
          </StyledCard>
        </div>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  signin: PropTypes.bool.isRequired,
};

export default Home;
