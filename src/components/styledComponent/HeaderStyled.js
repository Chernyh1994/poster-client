import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line import/prefer-default-export
export const HeaderStyled = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));
