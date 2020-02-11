import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

export const SignUpBtn = styled(Button)({
  color: 'cornflowerblue',
  textTransform: 'none',
});

export const StyledCard = styled(Card)({
  backgroundColor: 'rgb(238,244,251)',
  margin: 'auto',
  maxWidth: '400px',
  padding: '0 38px 24px 38px',
  textAlign: 'center',
});
