import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {  meta } from  "../../content_option";
import ReactPlayer from 'react-player'

export const  Rick = () => {
  return (
    <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          
          <div >
            <div className="align-self-center ">
              <div className="intro ">
                <h2 className="mb-1x">Why you clicked that</h2>
                <hr className="t_border my-4 ml-0 text-left" />
                <ReactPlayer id='video'
            className='react-player align-self-centre'
            url= 'dont_play.mp4'
            width='400px'
            height='300px'
            
            controls = {true}
            
            playing={true}
            

          />
                </div>
            </div>
          </div>

           </div>
    </HelmetProvider>
  );
};
