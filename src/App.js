import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { theme } from './theme';
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider }from 'styled-components';
import FullWidthTabs from './components/tabBar/tabBar.component';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import OnlineServices from './pages/online-services-page/online-services-page.component';
import Services from './pages/servicespage/servicespage.component';
import ContactUs from './pages/contact-us/contact-us.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';



const App = () => {
  const [currentUser, setCurrentUser] = React.useState(null)

  React.useEffect(() => {
    let unsubscribeFromAuth = null
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data() 
           });
        });
      } else {
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
          
          <FullWidthTabs currentUser={currentUser}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route  path='/services' component={Services} />
            <Route  path='/onlineServices' component={OnlineServices} />
            <Route  path='/contactUs' component={ContactUs} />
            <Route exact path='/signin' render={() => currentUser ?  <Redirect to='/' /> : <SignInAndSignUpPage />} />
          </Switch>
          
        
      </StyledThemeProvider>
    </MaterialThemeProvider>
  );
};
  

export default App;
