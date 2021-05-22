import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link} from 'react-router-dom';
import { UserbuttonContainer } from './userButtom.styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons({ children, component, to,  ...otherProps }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UserbuttonContainer  component={Link} to={to} {...otherProps}>
        {children}
      </UserbuttonContainer>
      
    </div>
  );
}