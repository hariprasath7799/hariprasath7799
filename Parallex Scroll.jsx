import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
export default function Parallaxs(){
    return(
        <Parallax pages={4} style={{ top: '0', left: '0' }}>
          
           
  <ParallaxLayer
    offset={0}
    speed={2.5}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:"green", color:"white"}}>
   
  </ParallaxLayer>

 

  <ParallaxLayer
    offset={0.99}
    speed={2}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      backgroundColor:"red",
    }}>
    <p>Scroll up</p>
  </ParallaxLayer>

  
  <ParallaxLayer
    offset={1}
    speed={0.49}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      backgroundColor:"orange",
    }}>
    <p>Scroll up</p>
  </ParallaxLayer>
 
</Parallax>


    );
}