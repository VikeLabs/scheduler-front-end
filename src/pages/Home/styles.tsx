import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Theme from 'atoms/Theme/Theme';

export const SignupBtn = styled(Button)({
  color: Theme.secondary,
  textTransform: 'none',
});

export const StyledCard = styled(Card)({
  backgroundColor: Theme.bgLight,
  margin: 'auto',
  maxWidth: '400px',
  padding: '0 38px 24px 38px',
  textAlign: 'center',
});
