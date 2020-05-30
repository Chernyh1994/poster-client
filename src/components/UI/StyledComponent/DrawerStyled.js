import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

// eslint-disable-next-line import/prefer-default-export
export const DrawerStyled = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));
