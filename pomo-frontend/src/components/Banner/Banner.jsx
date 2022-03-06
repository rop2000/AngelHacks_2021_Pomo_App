import React, {Component} from "react";
import "bulma";
import Pomos from '../../assets/pomos1.png'
import {Animated} from "react-animated-css";
 

function Banner(props) {
  
    return (
      <section class="hero is-primary is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
          <div class="columns is-vcentered">
  <div class="column is-6">
  <Animated animationIn="fadeIn" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
    <img src={Pomos}></img>
    </Animated>
  </div>
  <div class="column">
  <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1400} isVisible={true}>
  <div class="content">
  <p class="title is-2"><strong>Learn more. Play More. Do more.</strong></p>
  <p class="title is-1"><strong>WITH POMO</strong></p>
  <button class="button is-link is-large is-rounded" onClick={() => {props.scrollCallback()}}>Get Started</button>
</div>
</Animated>

  </div>
</div>
          </div>
        </div>
      </section>
    );
}

export default Banner;
