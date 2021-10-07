import React from 'react';
import BasicTextFields from '../textFiled/textFiled.component';
import OutlinedButtons from '../userButton/userButton.componenet';
import {auth, signInWithGoogle }  from '../../firebase/firebase.utils';
import {SigninButton, SigninForm} from './sign-in.styles';




const SignIn = () =>  {
    const [state, setState] = React.useState({
        email: '',
        password:''
    });
    

    const handleSubmit = async event => {
        event.preventDefault();


        try {
            await auth.signInWithEmailAndPassword(state.email, state.password);
            setState({
                ...state,
                email: '',
                password:''
            });

        } catch (error) {
            console.log(error);
        }
    };

    const handelChange = event => {
        const { value, id } = event.target;
        setState({ ...state,
            [id]: value})
    }

        return(
            <SigninForm onSubmit={handleSubmit} >
                <BasicTextFields variant='outlined' value={state.email} label='email' text={'Email'} name='EMAIL ADDRESS' handleChange={handelChange} required/>
                <BasicTextFields variant='outlined' value={state.password} label='password' text={'Pssword'} name='PASSWORD' handleChange={handelChange} required/>
                <SigninButton>
                    <OutlinedButtons  type='submit' onClick={handleSubmit}> SIGN IN </OutlinedButtons>
                    <OutlinedButtons onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</OutlinedButtons>
                </SigninButton>
            </SigninForm>
        )
};

export default SignIn;