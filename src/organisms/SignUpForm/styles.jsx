import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Theme from '../../atoms/Theme/Theme';

export const SignupBtn = styled(Button)({
  justifyContent: 'center',
  marginTop: '1.25rem',
  backgroundColor: Theme.primary,
  color: Theme.white,
  '&:hover': {
    backgroundColor: Theme.secondary,
    color: Theme.white,
  },
});

export const SigninBtn = styled(Button)({
  color: Theme.secondary,
  textTransform: 'none',
});

export const SiginupGoogleBtn = styled(Button)({
  color: Theme.secondary,
  textTransform: 'none',
});

export const StyledTextField = styled(TextField)({
  marginTop: '0.5rem',
});
