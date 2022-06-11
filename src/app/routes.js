import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { Rick } from "../pages/rick";
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { Doge } from "../pages/doge";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Error } from "../pages/404";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Intropara } from "../pages/intro";
import { Spotify } from "../pages/spotify"
import { lacasa } from "../pages/lacasa";
import { rob } from "../pages/rob";

const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/dontredirect" component={Rick}/>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/doge_game" component={Doge} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/lacasadepapel" component={lacasa} />
        <Route path="/spotify" component={Spotify}/>
        <Route path="/justparralax" component={Intropara}/>
        <Route path ="/rob" component={rob}/>
        <Route path="*" component={Error} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedSwitch />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
