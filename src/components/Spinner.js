import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { SpinnerStyled } from './styledComponent/SpinnerStyled';


const Spinner = () => {
  const classes = SpinnerStyled();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
