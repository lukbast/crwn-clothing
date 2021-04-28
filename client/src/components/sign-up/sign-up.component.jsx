import './sign-up.styles.scss'

import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {signUpStart} from '../../redux/user/user.actions'

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }


    handleSubmit = async event =>{
        event.preventDefault();
        const {signUpStart} = this.props
        const{displayName, password, email, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }
        signUpStart({password, email, displayName} )


    }


    handleChange = event =>{
        const {name, value} = event.target;

        this.setState({[name]: value})
    }


    render(){
        const{displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} label='Name' onChange={this.handleChange} />
                    <FormInput type='email' name='email' value={email} label='Email' onChange={this.handleChange} />
                    <FormInput type='password' name='password' value={password} label='Password' onChange={this.handleChange} />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} label='Confirm password'  onChange={this.handleChange} />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>  
        )
    }

}
const mapDispatchToProps = (dispatch) =>({
    signUpStart: (user)=> dispatch(signUpStart(user))
})

export default connect(null,mapDispatchToProps )(SignUp)
