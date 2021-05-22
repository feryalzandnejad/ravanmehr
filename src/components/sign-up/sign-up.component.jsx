import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import BasicTextFields from '../textFiled/textFiled.component';
import OutlinedButtons from '../userButton/userButton.componenet';
import { SignupButton } from './sign-up.styles';


const SignUp = () => {
    const [values, setValues] = React.useState({
        displayName: '',
        email:'',
        password: '',
        confirmPassword: ''
    })

    const {displayName, email, password, confirmPassword } = values;

    const handleSubmit = async event => {
        event.preventDefault();

        
        if (password !== confirmPassword) {
            alert ("password don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password); 

           await createUserProfileDocument(user, {displayName});

            setValues({
                ...values,
                displayName: '',
                email:'',
                password: '',
                confirmPassword: ''
           })


        } catch (error) {
            console.log(error);
        }
        
    };


    const handleChange = event => {
        const { value, id } = event.target;
        setValues({ 
            ...values,
            [id]: value
        })
    };

    return (

        <form onSubmit={handleSubmit} >
            <BasicTextFields variant='outlined' type='text' value={displayName} label='displayName' text={'Display Name'} name=': نام کاربری '  handleChange={handleChange} required/>
            <BasicTextFields variant='outlined' type='email' value={email} label='email' text={'Email'} name=':  ایمیل ' handleChange={handleChange} required/>
            <BasicTextFields variant='outlined' type='text' value={password} label='password' text={'Password'} name=': رمز عبور' handleChange={handleChange} required />
            <BasicTextFields variant='outlined' type='text' value={confirmPassword} label='confirmPassword' text={'ConfirmPassword'} name=': تکرار رمز عبور ' handleChange={handleChange} required/>
            <SignupButton >
                <OutlinedButtons type='submit' onClick={handleSubmit}> ثبت نام</OutlinedButtons>
            </SignupButton>
        </form>

    );
    
};


export default SignUp;