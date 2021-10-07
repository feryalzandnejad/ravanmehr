import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { MainContainer, SigninHeader, SignupHeader } from './signin-and-signup-mobileMode.styles';
import Divider from '@material-ui/core/Divider';



const MobileMode = () => (
    <MainContainer>
        <SigninHeader>
            SIGN IN TO YOUR ACCOUNT
        </SigninHeader>
        <SignIn />
        <Divider variant="middle" />
        <SignupHeader>
            CREATE YOUR ACCOUNT
        </SignupHeader>
        <SignUp />
    </MainContainer>
    
);

export default MobileMode;