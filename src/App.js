import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { theme } from './theme';
import { connect } from 'react-redux';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider }from 'styled-components';
import Header from './components/header/header.component';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Skincare from './pages/skincare/skincare-page.component';
import Makeup from './pages/makeup/makeuppage.component';
import Hair from './pages/hair/hair.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';



const App = ({setCurrentUser, currentUser}) => {
  React.useEffect(() => {
   
    let unsubscribeFromAuth = null
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const userRef = await createUserProfileDocument(userAuth);
      console.log(userRef)
      if (userAuth) {

        userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data() 
           });
        });
      } else {
        console.log(userAuth)
        setCurrentUser(userAuth)
      }     
    });

    return function cleanUp() {
      unsubscribeFromAuth();
    }
  }, [currentUser])

  return (   
    <MaterialThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>

           <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/Makeup' component={Makeup} />
            <Route  path='/skincare' component={Skincare} />
            <Route  path='/hair' component={Hair} />
            <Route exact path='/signup' render={() => currentUser ?  <Redirect to='/' /> : <SignInAndSignUpPage />} />
          </Switch>
          
        
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});
  

export default connect(mapStateToProps, mapDispatchToProps)(App);
