import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Theme from 'atoms/Theme/Theme';

export const StyledNavBar = styled(AppBar)({
  backgroundColor: Theme.primary,
});

export const StyledToolbar = styled(Toolbar)({
  minHeight: '48px',
});
