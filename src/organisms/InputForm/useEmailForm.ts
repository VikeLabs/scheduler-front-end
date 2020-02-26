import { useState } from 'react';
import * as yup from 'yup';

const emailSchema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email()
});

export const useEmailForm = (): [string, boolean, string, (email: string) => void] => {
  const [email, setEmail] = useState('');
  const [emailInvalid, setEmailInvalid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const onChangeEmail = (email: string) => {
    setEmail(email);
    emailSchema.validate({
      email: email
    })
    .then(() => {
      setEmailErrorMessage('');
      setEmailInvalid(false);
    }).catch((error) => {
      if (error instanceof yup.ValidationError) {
        setEmailErrorMessage(error.message);
        setEmailInvalid(true);
      }
    });
  }
  return [email, emailInvalid, emailErrorMessage, onChangeEmail];
}