import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SigninAndSignup, UserPanel, MainContainer } from './signin-and-signup-desktopMode.styles';


const DesktopMode = () => (

    <MainContainer>
        <UserPanel>
            <h3>ورود</h3>
            <h3>ثبت نام</h3>
        </UserPanel>
        <SigninAndSignup>
            <SignIn />
            <SignUp />
        </SigninAndSignup>
    </MainContainer>
);

export default DesktopMode;