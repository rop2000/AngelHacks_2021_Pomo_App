import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import { SignInContainer,ButtonsContainer,CustomButtonContainer,GroupContainer,
FormInputContainer,FormInputLabel } from './login.styles';
import {withRouter} from 'react-router-dom';


class Login extends React.Component {
    constructor() {
      super(); 
      this.state = {
          username: '',
          password: '',
          uid: ''
      }
    }

    componentWillMount() {
      const uid = this.props.location.state; 
      this.setState({uid: uid})
    }

    handleSubmit = async event => {
    event.preventDefault(); 
    const {username,password} = this.state;
    const {history} = this.props; 
    try {
        await auth.signInWithEmailAndPassword(username, password); 
        history.push('/', this.state.uid); 
    } catch(error) {
        alert(error); 
    } 

  }
  handleChange = event => {
      const {name, value} = event.target;
      this.setState({[name]: value}); 
  }

  render() {
      const {username, password} = this.state;
      return (
          <SignInContainer >
          <h1>Log In</h1>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
              Email
              <GroupContainer>
              <FormInputLabel/>
              <FormInputContainer type='text'
                name='username'
                label='Username'
                value={username}
                onChange={this.handleChange}
                required/>
              <FormInputLabel/>
              Password
              </GroupContainer>
              <GroupContainer>
              <FormInputLabel/>
              <FormInputContainer
                type='password'
                name='password'
                label='Password'
                value={password}
                onChange={this.handleChange}
                required
              />
              </GroupContainer>
              <FormInputLabel/>
              <ButtonsContainer>
            <CustomButtonContainer type='submit'>
              Log In
            </CustomButtonContainer>
          </ButtonsContainer>
          </form>
          </SignInContainer>
      )
  }
}

export default withRouter(Login);