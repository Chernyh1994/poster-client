import { makeStyles } from '@material-ui/core/styles';

export const StyledCard = makeStyles((theme) => ({ 
    root: {
        margin: '10px',
    },
    title: {
        fontSize: 14,
      },
    pos: {
        marginBottom: 12,
    },
}));

export const StyledCommentCard = makeStyles((theme) => ({ 
    root: {
        margin: '30px',
    },
    description: {

    },
}));