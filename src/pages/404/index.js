import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from  "../../content_option";
import './style.css';
import { Player} from '@lottiefiles/react-lottie-player';
import ThreeSixty from 'react-360-view';

export const  Error = () => {
    return (
      <HelmetProvider>
        <section id="404" className="404">
          <Helmet>
            <meta charSet="utf-8" />
            <title> {meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
         
            
            <div >
              <div >
                <div className="intro mx-auto">
                  <h2 className="mb-1x">Nothing Here The Page is deleted or moved.</h2>
                  <hr className="t_border my-4 ml-0 text-left" />
                  
                </div>

                <div id="oops">
                  <h1 className="mb-1x"> oops! That's 404.</h1>
                </div>
                 
                 

              </div>
            </div>
            
             
        </section>

        <div className="lottie_404">
              <Player
                autoplay
                loop
                src="404.json"
                style={{ height: '450px', width: '450px' }}
              >
              </Player>
            </div>

<div>
<ThreeSixty
    amount={36}
    imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36"
    fileName="chair_{index}.jpg?v1"
/>

</div>

      </HelmetProvider>

      
    );
  };
  