import React from 'react';
// import FormInput from '../form-input/form-input.component';
import {
    SignUpContainer,
    ButtonsContainer,
    CustomButtonContainer,
    GroupContainer,
    FormInputContainer,
    FormInputLabel,
    RadioButtonContainer,
} from './signup.styles';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';
import Login from '../../components/login/login.component';



class SignUp extends React.Component {
  constructor() {
      super(); 
      this.state = {
          handle: '',
          username: '',
          password: '', 
          uid: ''
      }
  }

  handleSubmit = async event => {
      event.preventDefault(); 
      const {username,password, handle} = this.state; 
      const {history} = this.props;
      try {
          const {user} = await auth.createUserWithEmailAndPassword(username, password); 
          await createUserProfileDocument(user, {handle});
          this.setState({
              username: '',
              password: '',
              uid: user.uid, 
          });
          history.push('/login', this.state.uid); 
      } catch(error) {
          alert(error); 
      } 

  }
  
  handleChange = event => {
      const {name, value} = event.target;
      this.setState({[name]: value}); 
  }
  handleClick = event => {
    const value = event.target.value; 
  }
  render() {
      const {username, password, handle} = this.state; 
      return (
          <SignUpContainer >
          <h1>Sign Up</h1>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <RadioButtonContainer >
            <label>Teacher
                <input type="radio" value="option1" name='radio' onClick={this.handleClick}/>
                </label>
                <label>Student
                <input type="radio" value="option2" name='radio' onClick={this.handleClick}/>
                </label>
            </RadioButtonContainer>
              Handle
              <GroupContainer>
              <FormInputLabel/>
              <FormInputContainer type='text'
                name='handle'
                value={handle}
                onChange={this.handleChange}
                label='handle'
                required/>
              <FormInputLabel/>
              </GroupContainer>
              Email
              <GroupContainer>
              <FormInputLabel/>
              <FormInputContainer type='text'
                name='username'
                value={username}
                onChange={this.handleChange}
                label='Username'
                required/>
              <FormInputLabel/>
              </GroupContainer>
              Password
              <GroupContainer>
              <FormInputLabel/>
              <FormInputContainer
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label='Password'
              />
              </GroupContainer>
              <FormInputLabel/>
              <ButtonsContainer>
            <CustomButtonContainer type='submit'>
            Sign Up
            </CustomButtonContainer>
          </ButtonsContainer>
          </form>
          </SignUpContainer>
      )
  }
}

export default withRouter(SignUp);
