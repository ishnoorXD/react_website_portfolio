import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta ,contactConfig} from  "../../content_option";
import { Player} from '@lottiefiles/react-lottie-player';
export const Doge = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            
          >
            <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_ecuofzs5.json"
                style={{ height: '500px', width: '500px' }}
              >
              </Player>
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">Sorry!</h2>
                <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_tyjt6he8.json"
                style={{ height: '200px', width: '200px' }}
              ></Player>

                <h1 className="fluidz-48 mb-1x">
                  Working on game got corrupted due to some unity version issue . but will embed it soon .  :(
                </h1>
               
                
                </div>
              </div>
            </div>
          </div>
       
      </section>
    </HelmetProvider>
  );
};
