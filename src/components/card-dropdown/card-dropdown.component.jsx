import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import SignIn from '../sign-in/sign-in.component';
import OutlinedButtons from '../userButton/userButton.componenet';
import { SigninText, CardDropdownContainer, CreateaccountContainer, Title } from './card-dropdown.styles';
import { connect} from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import Divider from '@material-ui/core/Divider';



const SignInCart = ({currentUser}) => {

  return (
    <CardDropdownContainer>
          
        {
          currentUser ? 
          <OutlinedButtons onClick={() => auth.signOut()}>SIGN OUT</OutlinedButtons>
          :
          <React.Fragment>
            <SigninText>
              <Title>SIGN IN</Title>
            </SigninText>
            <SignIn />
            <Divider variant="middle" />
            <CreateaccountContainer>
              <Title>NEW TO SITE? </Title>    
              <OutlinedButtons bottunColor='black' to={'/signup'}>CREATE AN ACCOUNT</OutlinedButtons>
            </CreateaccountContainer>
          </React.Fragment>
        }
    </CardDropdownContainer>
  );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
  });
  
  export default connect(mapStateToProps)(SignInCart);