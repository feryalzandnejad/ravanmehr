import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import DesktopMode from '../../components/singin-and-signup-desktopMode/signin-and-signup-desktopMode.component';
import ScrollableTabsButtonAuto from '../../components/signin-and-signup-mobileMode/signin-and-signup-mobileMode.component';
import { useTheme } from '@material-ui/core/styles';




const SignInAndSignUpPage = () => {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            {
               matchesSm ? 

               <ScrollableTabsButtonAuto />
               : 
               <DesktopMode />
            }
        </React.Fragment>      
    )
};

export default SignInAndSignUpPage;