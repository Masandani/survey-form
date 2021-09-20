/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import FormSignUp from "../FormSignUp/FormSignUp";
import Start from "../Start/Start";
import TimeUp from "../TimeUp/TimeUp";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FinalPage from "../FinalPage/FinalPage";
import Questions from "../Questions/Questions"

import "./App.css";

const App = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.go(1);
  };

  function submitForm() {
    setIsSubmited(true);
  }

  let location = useLocation();

  const headerHandle = () => {
    if (location.pathname === "/questions/1") {
      setIsSubmited(true)
    } else if (location.pathname === "/questions/2") {
      setIsSubmited(true)
    } else if (location.pathname === "/questions/3") {
      setIsSubmited(true)
    }
  }

  useEffect(() => {
    headerHandle()

  }, [isSubmited])


  return (
    <div className="App">
      {isSubmited && <Header />}
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            {!isSubmited ? <FormSignUp submitForm={submitForm} /> : <Start />}
          </Route>

          <Route path="/questions/:id" component={Questions} />

          <Route path="/timeup" component={TimeUp} />

          <Route path="/final" component={FinalPage} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
