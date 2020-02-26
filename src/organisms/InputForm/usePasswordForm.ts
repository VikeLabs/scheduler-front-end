import { useState } from 'react';
import * as yup from 'yup';


const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .required()
    .min(6, 'Password is 6 or more characters')
    .matches(/^(.*[A-Z].*)$/, 'Password must contain uppercase letter')
    .matches(/^(.*[a-z].*)$/, 'Password must contain lowercase letter')
})

export const usePasswordForm = (): [string, boolean, string, (password: string) => void] => {
  const [password, setPassword] = useState('');
  const [passwordInvalid, setPasswordInvalid] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const onChangePassword = (password: string) => {
    setPassword(password);
    passwordSchema.validate({
      password: password
    })
      .then(() => {
        setPasswordErrorMessage('');
        setPasswordInvalid(false);
      }).catch((error) => {
        if (error instanceof yup.ValidationError) {
          setPasswordErrorMessage(error.message);
          setPasswordInvalid(true);
        }
      });
  }
  return [password, passwordInvalid, passwordErrorMessage, onChangePassword];
}