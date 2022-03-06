
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from 'react-transition-group';
import Landing from '../Landing/Landing.js';
import TimerPage from '../TimerPage/TimerPage.js';

const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition 
        key={location.key} 
        classNames="slide" 
        timeout={1000}
      >
        <Switch location={location}>
          <Route path="/" component={Landing} exact />
          <Route path="/pomodors" component={Landing} />
          <Route path="/timer" component={TimerPage} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  ));

  export default AnimatedSwitch;