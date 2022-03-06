
import React, { Component } from 'react';


function PomoCard(props){
    
    
    
   
        return (
            <div class="box" style={{margin:15}}>
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src={props.img} alt="Image"/>
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{props.pomoName}</strong> <small>{"Height: " + props.height}</small>
          <br/>
         {props.pomoDesc}
        </p>
      </div>
      
    </div>
  </article>
</div>
        );
}

export default PomoCard;
























