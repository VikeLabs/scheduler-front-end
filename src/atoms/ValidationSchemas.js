import * as yup from 'yup';

const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(1, 'A first name is required')
    .required('A first name is required'),
  lastName: yup
    .string()
    .min(1, 'A last name is required')
    .required('A last name is required'),
  email: yup
    .string()
    .email('This must be a valid email')
    .required('An email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 charaters long')
    .required('A password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

// eslint-disable-next-line import/prefer-default-export
export { signUpSchema };
