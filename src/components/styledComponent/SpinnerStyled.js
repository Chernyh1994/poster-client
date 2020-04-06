import { makeStyles } from '@material-ui/core/styles';

export const SpinnerStyled = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
}));