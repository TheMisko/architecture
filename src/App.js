import React from "react";
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Test from "./pages/test";
import Projects from "./pages/projects";
import AboutUs from "./pages/aboutUs";
import Services from "./pages/services";
import Contact from "./pages/contact";
import TestC1 from "./components/testC1";
import Project1 from "./pages/project1";
import Project2 from "./pages/project2";
import Project3 from "./pages/project3";
import Project4 from "./pages/project4";
import Project5 from "./pages/project5";
import "./App.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/testc1" component={TestC1} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Stratos Research Center" component={Project1} />
          <Route exact path="/Cotswolds bungalow" component={Project2} />
          <Route exact path="/Matchbox houses" component={Project3} />
          <Route exact path="/Bangalore International" component={Project4} />
          <Route exact path="/Wayne State University" component={Project5} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
