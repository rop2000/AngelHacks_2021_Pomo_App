import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { Component } from 'react';
import PomoDnD from '../PomoDnD/PomoDnd.js';
import PomoCard from '../PomoCard/PomoCard.js';
import Pomos from '../../assets/pomos1.png'
import {Animated} from "react-animated-css";
import Squirrel from '../../assets/squirrel.png';


function updatePhoton(){
    fetch('https://pomo-angel.herokuapp.com/photonToggle')
  .then(response => response.json())
  .then(data => console.log(data));
}

class PomoPage extends Component {
    render() {
        return (
            <div>
                <section class="hero is-primary is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
          <div class="columns">
  <div class="column is-4">
  <Animated animationIn="fadeIn" animationOut="zoomOutDown" animationInDuration={2000} animationOutDuration={2000} isVisible={true}>
    <p class="title is-2">Your Pomodaurs</p>
    
    <PomoDnD></PomoDnD>
    
    </Animated>
  </div>
  <div class="column">
  <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1400} isVisible={true}>
  <div class="content">
  <p class="title is-2">Pomodaur Status</p>
  <img src={Squirrel} style={{borderRadius: 20}}></img>
 
  <div class="field is-grouped is-grouped-multiline" style={{marginLeft:285}}>
  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">name</span>
      <span class="tag is-info">Chungus</span>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">Online</span>
      <span class="tag is-success">YES</span>
    </div>
  </div>

  <div class="control">
    <div class="tags has-addons">
      <span class="tag is-dark">Height</span>
      <span class="tag is-warning">1m</span>
    </div>
  </div>
</div>

<button class="button is-danger is-rounded" onClick={() => updatePhoton()}>RAINBOW MODE</button>

</div>
</Animated>

  </div>
</div>
          </div>
        </div>
      </section>
           
            
            </div>
        );
    }
}

export default PomoPage;
