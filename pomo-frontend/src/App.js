import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner.jsx';
import Navbar from './components/Navbar/Navbar.js';
import Landing from './components/Landing/Landing.js';
import TimerPage from './components/TimerPage/TimerPage.js';
import SignupPage from './pages/signuppage/signuppage.component';
import LoginPage from './pages/loginpage/loginpage.component';
import PomoPage from './components/PomoPage/PomoPage.js';

import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Animated } from 'react-animated-css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
         
        </header> */}
       
        <Navbar></Navbar>
  
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/pomodors" component={PomoPage} />
          <Route path="/timer" component={TimerPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
       
      </div>
    );
  }
}

export default App;
