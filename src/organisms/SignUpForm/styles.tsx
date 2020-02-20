import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const SigninBtn = styled(Button)({
  color: 'cornflowerblue',
  textTransform: 'none',
});

export const SignupBtn = styled(Button)({
  backgroundColor: 'midnightblue',
  color: 'white',
  margin: '8px 0',
  padding: '6px 36px',
  width: 'fit-content',
  '&:hover': {
    backgroundColor: 'cornflowerblue',
  },
});

export const StyledTextField = styled(TextField)({
  marginBottom: '8px',
});

export const SiginupGoogleBtn = styled(Button)({
  textTransform: 'none',
});
