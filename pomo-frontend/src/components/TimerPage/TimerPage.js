import React, {Component, useState} from 'react';
import Banner from '../Banner/Banner.jsx';
import Timer from '../Timer/Timer.js';
import TimerCard from '../TimerCard/TimerCard.js';
import PandaPomo from '../../assets/redpanda.png'
import PandaTeacher from '../../assets/teacher_trsp.gif'
import Pinata from '../../assets/pinata.gif'
import Studying from '../../assets/studying.gif'
import MagicCat from '../../assets/magiccat.gif'
import {Animated} from "react-animated-css";
import Modal from '../Modal/Modal.js';


class TimerPage extends Component{
    constructor() {
        super();
        this.state = {
          timerOn: false,
          timeData: 25,
          timerDuration: 10,
          status: false,
          imgSwitch: false,
          modalState: false,
          key: 0,
          onBreak: false,
        };

        this.handleTimeCallback = this.handleTimeCallback.bind(this);
        this.handleModalCallback = this.handleModalCallback.bind(this);
      }

    toggleModal = () => {    
        this.setState({modalState: !this.state.modalState})
    }

    updateKey = () => {
        this.setState({key: this.state.key + 1, modalState: false, onBreak: true, timerDuration: 300})
    }

    startTimer(){
        this.setState({
            timerOn: true
        })

    }

    stopTimer(){
        this.setState({
            timerOn: false
        })

    }


    handleTimeCallback = (childData) => {
        this.setState({imgSwitch: !this.state.imgSwitch})
    }

    handleModalCallback = (childData) => {
        if(!this.state.onBreak){
        this.toggleModal()
        }
        else{
            this.setState({onBreak: false, timerDuration: 1500})

        }
    }

    render() {
        return (
        <div>
        <Animated animationIn="bounceInRight" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={2000} isVisible={true}>
        <section class="hero is-warning is-large">
        <div class="hero-head"> 
        {this.state.onBreak ?
        <p className="title is-1 pt-3">BREAK TIME!</p>
        :
        <p className="title is-1 pt-3">FINISH SOME HOMEWORK</p>
        }
        </div>
        <div class="hero-body">
         <div class="columns is-mobile is-centered" style={{marginLeft: 75}}>
            <div class="column">
            {!this.state.imgSwitch ?
            <img style={{marginTop: -250, width: 600, height: 450, borderRadius: 20}} src={MagicCat}></img>   
            :
            <img style={{marginTop: -250, width: 600, height: 450, borderRadius: 20}} src={Studying}></img>
            }
            
            </div>
            <div class="column" style={{marginTop: -75}}>

            <Timer duration={this.state.timerDuration} key={this.state.key} isPlaying={this.state.timerOn}  parentCallback = {() => {this.handleTimeCallback()}} modalCallback = {() => {this.handleModalCallback()}} ></Timer>

             <div class="buttons" style={{marginTop: 50, marginLeft: 55}} >
            <button class="button is-info is-medium is-hovered">BREAK?</button>
            <button class="button is-success is-medium is-hovered" onClick={() => this.startTimer()}>START</button>
            {this.state.timerOn 
            ?
            <button class="button is-danger is-medium is-hovered" onClick={() => this.stopTimer()} >PAUSE</button>
            :
            <button class="button is-danger is-medium is-hovered" onClick={() => this.startTimer()}>UNPAUSE</button>
            }
            </div>        
            </div>
         </div>
       </div>
    
        </section>
        </Animated>
        <Animated animationIn="bounceInLeft" animationOut="zoomOutDown" animationInDuration={5000} animationOutDuration={2000} isVisible={true}>
        <section class="hero is-danger is-large">
        <div class="hero-body">
          <div class="container has-text-centered">
          <div class="columns is-mobile is-centered">
          <div class="column is-half" style={{marginTop:-200}}>
          <article class="panel is-link">
  <p class="panel-heading">
    Your Homeworks
  </p>
  <p class="panel-tabs">
    <a class="is-active">All</a>
    <a>Science</a>
    <a>Math</a>
    <a>Reading</a>
    <a>Writing</a>
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-link" type="text" placeholder="Search"/    >
      <span class="icon is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <a class="panel-block is-active">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Who was Einstein? Reading
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Earth Science HW
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Weather Journal
  </a>
  <a class="panel-block">
    <span class="panel-icon">
      <i class="fas fa-book" aria-hidden="true"></i>
    </span>
    Science Memes
  </a>
</article>
</div>
</div>

             </div>
            </div>
        </section>
        </Animated>

         <Modal 
            closeModal={this.toggleModal} 
            modalState={this.state.modalState} 
            title="YOU WON A POMO!"
          >
          <p class="title is-4">Pepe The Pinata was added to your collection!</p>
          <img style={{width: 600, height: 450, borderRadius: 20}} src={Pinata}></img>
          <button class="button is-danger is-medium is-hovered" onClick={() => this.updateKey()}>
          Start Break
        </button>
        
      </Modal>


        </div>
        )
    }


}

export default TimerPage;