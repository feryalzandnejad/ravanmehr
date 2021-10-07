import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import BasicTextFields from '../textFiled/textFiled.component';
import OutlinedButtons from '../userButton/userButton.componenet';
import { SignupButton ,SignupForm} from './sign-up.styles';


const SignUp = () => {
    const [values, setValues] = React.useState({
        displayName: '',
        email:'',
        password: '',
        confirmPassword: ''
    })

    const {displayName, email, lastname, password, confirmPassword } = values;

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

        <SignupForm onSubmit={handleSubmit} >
            <BasicTextFields variant='outlined' type='text' value={displayName} label='displayName'  name='FIRST NAME'  handleChange={handleChange} required/>
            <BasicTextFields variant='outlined' type='text' value={lastname} label='last name'  name='LAST NAME' handleChange={handleChange} required />
            <BasicTextFields variant='outlined' type='email' value={email} label='email' text={'Email'} name='EMAIL' handleChange={handleChange} required/>
            <BasicTextFields variant='outlined' type='text' value={password} label='password' text={'Password'} name='PASSWORD' handleChange={handleChange} required />
            <BasicTextFields variant='outlined' type='text' value={confirmPassword} label='confirmPassword' text={'ConfirmPassword'} name='CONFIRM PASSWORD' handleChange={handleChange} required/>
            <SignupButton >
                <OutlinedButtons bottunColor='black' type='submit' onClick={handleSubmit}>CREATE AN ACCOUNT</OutlinedButtons>
            </SignupButton>
        </SignupForm>

    );
    
};


export default SignUp;