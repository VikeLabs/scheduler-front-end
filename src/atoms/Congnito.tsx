/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext } from 'react';
import Amplify, { Auth } from 'aws-amplify';

const config = {
  Auth: {
    region: process.env.REACT_APP_AUTH_REGION,
    userPoolId: process.env.REACT_APP_AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AUTH_CLIENT_ID,
  },
};

class Cognito {
  authUser: any;

  constructor() {
    Amplify.configure(config);
    this.authUser = null;
  }

  setAuthUser = async () => {
    this.authUser = await Auth.currentAuthenticatedUser();
  };

  signUpWithEmailAndPassword = async (email: string, password: string) => {
    Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
      },
    });
    // this.setAuthUser();
  };

  signInWithEmailAndPassword = (email: string, password: string) =>
    Auth.signIn({
      username: email,
      password,
    });

  signOut = async () => {
    Auth.signOut();
  };
}

const CognitoContext = createContext({});

const withCognito = (Component: any) => (props: any) => (
  <CognitoContext.Consumer>{cognito => <Component {...props} cognito={cognito} />}</CognitoContext.Consumer>
);

export { CognitoContext, withCognito };
export default Cognito;
