import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Theme from '../../atoms/Theme/Theme';

export const ForgotPwdBtn = styled(Button)({
  color: Theme.gray,
  marginLeft: 'auto',
  marginTop: '0.5rem',
  textTransform: 'none',
  width: 'fit-content',
});

export const SigninBtn = styled(Button)({
  justifyContent: 'center',
  marginTop: '0.5rem',
  backgroundColor: Theme.primary,
  color: Theme.white,
  '&:hover': {
    backgroundColor: Theme.secondary,
    color: Theme.white,
  },
});

export const SignupBtn = styled(Button)({
  color: Theme.secondary,
  textTransform: 'none',
});

export const SigininGoogleBtn = styled(Button)({
  color: Theme.secondary,
  textTransform: 'none',
});

export const StyledTextField = styled(TextField)({
  marginTop: '0.5rem',
});
