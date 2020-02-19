import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const ForgotPwdBtn = styled(Button)({
  color: 'lightslategrey',
  marginLeft: 'auto',
  marginTop: '2px',
  textTransform: 'none',
  width: 'fit-content',
});

export const SigninBtn = styled(Button)({
  backgroundColor: 'midnightblue',
  color: 'white',
  margin: '8px auto',
  padding: '6px 36px',
  width: 'fit-content',
  '&:hover': {
    backgroundColor: 'cornflowerblue',
  },
});

export const SigininGoogleBtn = styled(Button)({
  textTransform: 'none',
});

export const TextFieldPwd = styled(TextField)({
  marginTop: '8px',
});
