import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from './style.css'
import { introdata } from '../../content_option'
import ReactPlayer from 'react-player';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from  "../../content_option";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Intropara = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <HelmetProvider>
     
    <Helmet>
      <meta charSet="utf-8" />
      <title> {meta.title}</title>
      <meta name="description" content={meta.description} />
    </Helmet>

    <div class = "g">
   
    <div >
      
    <Parallax class ="lol" pages={6}>

<ParallaxLayer class="heading-scroll" offset={0} speed={1.5} style={{  justifyContent: 'flex-end' ,margin :"50px" }}>
  <h1>Scroll Down To See Parallax!</h1>

</ParallaxLayer>

<ParallaxLayer class="cat" sticky={{ start: 1, end:4.6 }} offset={1} speed={0.8} style={{justifyContent:'flex-start'}}>
  <img src="cat.gif"/>
</ParallaxLayer>

<ParallaxLayer offset={0.5} class="moon" speed={1.2} style={{justifyContent:'flex-end' ,height:'20px' , width:'20px'}}>
  <img src="moon.png" />
</ParallaxLayer>

<ParallaxLayer offset={1.5} speed={1} style={{justifyContent:'flex-start'}}>
  <img src="cloud.png" />
</ParallaxLayer>

<ParallaxLayer offset={2} speed={1} style={{justifyContent:'flex-start'}}>
  <img src="cloud.png"/>
</ParallaxLayer>

<ParallaxLayer offset={3} speed={1.5} style={{  justifyContent: 'flex-end' }}>
  <h2>On the way to land , Meow!</h2>

</ParallaxLayer>

<ParallaxLayer offset={5} speed={1.5} style={{ justifyContent: 'flex-end' }}>
<img src="land.png"/>

</ParallaxLayer>

</Parallax>
    </div>


    
  </div>

  <div class="msg">
    <h1>Thankyou for Landing Me , that was a parallax effect with different components </h1>
<Link to="/spotify">
    <div class="spobtn">
      <img class="spimg " src="spotify.ico"/>

      <h2>Spotify</h2>
    </div>
    </Link>
  </div>

  </HelmetProvider>
  )
}