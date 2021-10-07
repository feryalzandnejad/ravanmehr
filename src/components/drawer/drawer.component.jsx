import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { Link } from 'react-router-dom';
import { Wrapper, ListItemContainer, ButtonContainer } from './drawer.styles';
import { connect } from 'react-redux';




const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const SwipeableTemporaryDrawer = ({data}) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {data.map((item, index) => (
          <ListItemContainer button key={index} component={Link} to={item.link}>
            <ListItemText primary={item.title} />
          </ListItemContainer>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Wrapper>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonContainer  onClick={toggleDrawer(anchor, true)}><DehazeIcon /></ButtonContainer >
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  data: state.tabsData.data
});

export default connect(mapStateToProps)(SwipeableTemporaryDrawer);