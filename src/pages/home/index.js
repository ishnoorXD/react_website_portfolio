import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, contactConfig } from "../../content_option";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


export const Home = () => {
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
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-       center ">
              <div className="intro mx-auto">


                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.never,
                        introdata.animated.letyou,
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>



                  <Link to="/dontredirect">
                    <div id="button_c" className="ac_btn btn">
                      ----- Click ar your Own Risk -----
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                  <Link to="/doge_game">
                    <div id="button_d" className="ac_btn btn">
                      ----- Play The Doge Game -----
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>

                </div>
              </div>



            </div>


          </div>


        </div>


      </section>

      <section>


        <Container className="flex">

          <h1>Listen to My favourite songs on spotify</h1>

          <div className="two_buttons">

            <Link to="/spotify">
              <div class="spotbtn glow">

                <div>
                  <img class="spimg " src="spotify.ico" />

                </div>

                <h2>Spotify</h2>
              </div>
            </Link>

            <Link to="/lacasadepapel">
              <div class="mfbtn glowm">

                <div>
                  <img class="nfimg " src="netflix_logo_icon_170919.ico" />

                </div>

                <h2>Heist</h2>
              </div>
            </Link>
          </div>


          <div >
            <Link to="/justparralax">
              <img src="cat.gif" />
              <h2 class="meow-text">Meow! Just help and CLICK ME to land :) ( parralax effect ) </h2>
            </Link>
          </div>
        </Container>
      </section>
    </HelmetProvider>
  );
};
