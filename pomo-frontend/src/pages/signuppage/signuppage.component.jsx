import React from 'react'; 
import SignUp from '../../components/signup/signup.component';
import './signuppage.styles.scss'
import logo from '../../assets/pomos1.png';


class SignUpPage extends React.Component {
    render() {
        return(
            <div className='signup-container'>
                <SignUp className='signup'/>
                <img src={logo} alt="pommos"/>
            </div>
        ) 
    }
}
export default SignUpPage ;