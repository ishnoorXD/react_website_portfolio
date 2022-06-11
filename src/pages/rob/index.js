import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import ReactPlayer from 'react-player'

export const rob = () => {



    return (
        <HelmetProvider>

            <section id="lacasa">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> {meta.title} | La Casa De Papel</title>
                    <meta name="description" content={meta.description} />
                </Helmet>

                <div className="d-block d-lg-flex align-items-center">
                    <div
                        className="h_bg-image order-1 order-lg-2 h-100 ">
                        <ReactPlayer id='s'
                        className='react-player align-self-centre'
                        url='fbi-open-up.mp4'
                        width='100%'
                        height='500px'

                        controls={true}

                        playing={true}
                        loop




                    />
                    </div>
                    <div className="justify-content-center">

                        <div className="align-self-center ">
                            <div className="intro mx-auto">

                                <div className="align-items-center  tips" >
                                    <h1 className=" ">Tips To Follow</h1>
                                    

                                    <h3>1. Dont Ripped by FBI</h3>
                                    <h3>2. Do at your own risk else FBI open up.</h3>
                                    <h3>3. Follow 1. and 2. bbyeee</h3>
                                    <h3>4. and wait Don't do that I was kidding .</h3>
                                    
                                </div>

                            </div>
                        </div>
                    </div>




                </div>


            </section>
        </HelmetProvider>
    );
};