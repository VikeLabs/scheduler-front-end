import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Theme from 'atoms/Theme/Theme';

export const StyledCard = styled(Card)({
  backgroundColor: Theme.bgLight,
  padding: '1rem 2rem',
  textAlign: 'center',
});
