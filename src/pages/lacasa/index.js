import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lacasaimg, meta, contactConfig } from "../../content_option";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";




export const lacasa = () => {



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
                        <img src="Money-Heist-TV-Series-PNG-File.png" className="img-fluid" />
                    </div>
                    <div className="justify-content-center">

                        <div className="align-self-center ">
                            <div className="intro mx-auto">

                                <div className="align-items-center  ">
                                    <h1 className=" main-heading">Money Heist</h1>
                                </div>

                            </div>
                        </div>
                    </div>




                </div>





            </section>

            <section id="slider">

                <div className="align-items-center sliderc">

                    <Carousel className="slider img-fluid">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://wallpapercave.com/dwp1x/wp6370545.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Hello there</h3>
                                <p>Are you borred?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://wallpapercave.com/dwp1x/wp6190178.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>What about</h3>
                                <p>Rob Something . umm yes i wrote much.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://wallpapercave.com/dwp1x/wp5735063.jpg"
                                alt="Third slide"
                            />


                        </Carousel.Item>
                    </Carousel>




                </div>




                <div className="d-block d-lg-flex align-items-center">
                    <div
                        className="h_bg-image order-1 order-lg-2 h-100 ">
                        <img src="White-House-PNG-Pic.png" className="img-fluid" />
                    </div>
                    <div className="justify-content-center">

                        <div className="align-self-center ">
                            <div className="intro mx-auto">

                                <div className="align-items-center rob-text ">
                                    <h4>
                                        {lacasaimg.rob_text}
                                    </h4>

                                    <Link to="/rob">

                                    <div class="mfbtn glowm">
                                        <h2>Rob Now </h2>
                                        
                                    </div>

                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                


            </section>


        </HelmetProvider>
    );

};
