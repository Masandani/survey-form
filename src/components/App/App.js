/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageOne from "../PageOne/PageOne";
import PageTwo from "../PageTwo/PageTwo";
import PageThree from "../PageThree/PageThree";
import FormSignUp from "../FormSignUp/FormSignUp";
import Start from "../Start/Start";
import TimeUp from "../TimeUp/TimeUp";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FinalPage from "../FinalPage/FinalPage";
import "./App.css";

const App = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  function submitForm() {
    setIsSubmited(true);
  }
  let location = useLocation();
  return (
    <div className="App">
      {isSubmited && <Header />}
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            {!isSubmited ? <FormSignUp submitForm={submitForm} /> : <Start />}
          </Route>

          <Route path="/1" component={PageOne} />

          <Route path="/2" component={PageTwo} />

          <Route path="/3" component={PageThree} />

          <Route path="/timeup" component={TimeUp} />

          <Route path="/final" component={FinalPage} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
