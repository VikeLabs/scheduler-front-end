import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import TextField from '@material-ui/core/TextField';
import { withCognito } from '../atoms/Congnito';

interface Props {
  cognito: any;
}

// eslint-disable-next-line react/prop-types
const Landing: React.FC<Props> = props => {
  const { cognito } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      // eslint-disable-next-line react/prop-types
      await cognito.signUpWithEmailAndPassword(email, password);
      console.log('created');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{email}</p>
      <p>{password}</p>
      <TextField helperText="email" onChange={event => setEmail(event.target.value)} />
      <TextField helperText="password" onChange={event => setPassword(event.target.value)} />
      <button type="submit">submit</button>
    </form>
  );
};

export default withCognito(Landing);
