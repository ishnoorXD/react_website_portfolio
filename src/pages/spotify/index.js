import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from  "../../content_option";
import { Container,  } from "semantic-ui-react";

import { Player} from '@lottiefiles/react-lottie-player';


export const Spotify = () => {
  

  return (
    <HelmetProvider>
     
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div >
          <Container>
         
          <div class="heading">
           <h1>My Spotify playlist , Hows that?</h1>
         </div>
        <div class="spotify glow">

          <div class="frame">
            
        <iframe src="https://open.spotify.com/embed/playlist/2ENS3GHfo6EjAVOJ0ZkegF?utm_source=generator" width="100%" height="360" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; loop" ></iframe>
       
        
       
       
       </div>

       <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/private_files/lf30_xnjjfyjt.json"
        style={{ height: '300pxpx', width: '300px' }}
        >
         </Player>
       
       
       </div>
       </Container>


       </div>
    </HelmetProvider>
  );
};
