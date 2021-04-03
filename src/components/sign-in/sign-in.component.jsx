import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'

import {signInWithGoogle} from '../../firebase/firebase.utils.js'

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault()

        this.setState({email: '', password: ''})
    }


    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]: value})
    }



    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name={'email'} type={'email'} handleChange={this.handleChange} value={this.state.email} label={'Email'} />
                    <FormInput name={'password'} type={'password'} handleChange={this.handleChange}  value={this.state.password} label={'Password'} />
                    <div className='buttons-container'>
                    <CustomButton type={'submit'}>Sign in</CustomButton>
                    <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }

}


export default SignIn