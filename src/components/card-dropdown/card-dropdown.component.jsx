import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import SignIn from '../sign-in/sign-in.component';
import OutlinedButtons from '../userButton/userButton.componenet';
import { SigninText, CardDropdownContainer, CreateaccountContainer, Title } from './card-dropdown.styles';
import { connect} from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

const MouseOverPopover = ({currentUser}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
      console.log('handlePopoverClose')
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <CardDropdownContainer>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
      >
          <PersonIcon cursor={"pointer"}/>
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus>
          
          {
            currentUser ? 
            <OutlinedButtons onClick={() => auth.signOut()}>SIGN OUT</OutlinedButtons>
            :
            <React.Fragment>
              <SigninText>
                <Title>SIGN IN</Title>
              </SigninText>
              <SignIn onMouseEnter={handlePopoverClose}/>
              <Divider variant="middle" />
              <CreateaccountContainer>
                <Title>NEW TO SITE? </Title>    
                <OutlinedButtons bottunColor='black' to={'/signup'} onClick={handlePopoverClose}>CREATE AN ACCOUNT</OutlinedButtons>
              </CreateaccountContainer>
            </React.Fragment>
          }
        
      </Popover>
    </CardDropdownContainer>
  );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
  });
  
  export default connect(mapStateToProps)(MouseOverPopover);