import React from 'react'; 
import Login from '../../components/login/login.component';
import './loginpage.styles.scss'
import logo from '../../assets/pomos1.png';

class LoginPage extends React.Component {
    render() {
    return(
            <div className='login-container'>
                <Login props={this.props} className='login'/>
                <img src={logo} alt="pommos"/>
            </div>
        ) 
    }
}
export default(LoginPage);