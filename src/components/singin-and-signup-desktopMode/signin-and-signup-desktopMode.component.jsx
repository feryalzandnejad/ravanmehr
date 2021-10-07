import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SigninAndSignup, UserPanel, MainContainer } from './signin-and-signup-desktopMode.styles';
import Divider from '@material-ui/core/Divider';


const DesktopMode = () => (

    <MainContainer>
        <UserPanel>
            <h3>SIGN IN</h3>
            <h3>CREATE ACCOUNT</h3>
        </UserPanel>
        <SigninAndSignup>
            <SignIn />
            <Divider variant="middle" />
            <SignUp />
        </SigninAndSignup>
    </MainContainer>
);

export default DesktopMode;