import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'

import {connect} from 'react-redux'

import {googleSignInStart} from '../../redux/user/user.actions.js'
import {emailSignInStart} from '../../redux/user/user.actions'

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = async  event =>{
        event.preventDefault()
        const {emailSignInStart} = this.props
        const {email, password} = this.state;
        emailSignInStart(email, password)

    }


    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({[name]: value})
    }



    render(){
        const {googleSignInStart} = this.props
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name={'email'} type={'email'} handleChange={this.handleChange} value={this.state.email} label={'Email'} />
                    <FormInput name={'password'} type={'password'} handleChange={this.handleChange}  value={this.state.password} label={'Password'} />
                    <div className='buttons-container'>
                    <CustomButton type={'submit'}>Sign in</CustomButton>
                    <CustomButton type={'button'} isGoogleSignIn={true} onClick={googleSignInStart}>Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }

}
const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null,mapDispatchToProps )(SignIn)