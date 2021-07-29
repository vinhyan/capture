import React from "react";
//Components
import Nav from "./components/Nav";
import AboutUs from "../src/pages/AboutUs";
import OurWork from "../src/pages/OurWork";
import ContactUs from "../src/pages/ContactUs";
import MovieDetail from "../src/pages/MovieDetail";
// import ScrollTop from "../src/components/ScrollTop";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Styled components
import GlobalStyle from "./components/GlobalStyle";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="https://vinhyan.github.io/capture/" exact>
            <AboutUs />
          </Route>
          <Route path="https://vinhyan.github.io/capture/work" exact>
            <OurWork />
          </Route>
          <Route path="https://vinhyan.github.io/capture/work/:id">
            <MovieDetail />
          </Route>
          <Route path="https://vinhyan.github.io/capture/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
   
    </div>
  );
}

export default App;
