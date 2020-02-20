import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Theme from '../../atoms/Theme/Theme';

export const ForgotPwdBtn = styled(Button)({
  color: Theme.gray,
  marginLeft: 'auto',
  marginTop: '2px',
  textTransform: 'none',
  width: 'fit-content',
});

export const SigninBtn = styled(Button)({
  backgroundColor: Theme.primary,
  color: Theme.white,
  margin: '8px auto',
  padding: '6px 36px',
  width: 'fit-content',
  '&:hover': {
    backgroundColor: Theme.secondary,
  },
});

export const SigininGoogleBtn = styled(Button)({
  textTransform: 'none',
});

export const TextFieldPwd = styled(TextField)({
  marginTop: '8px',
});
