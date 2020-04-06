import { makeStyles } from '@material-ui/core/styles';

export const HeaderStyled = makeStyles((theme) => ({ 
    root: {
        display: 'flex',
      }, 
    content: {
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));