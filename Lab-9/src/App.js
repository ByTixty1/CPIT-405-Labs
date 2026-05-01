import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RecipeDetail from "./components/RecipeDetail";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipe/:id" component={RecipeDetail} />
        <Route path="/about" component={About} />
      </Switch>
    </HashRouter>
  );
}

export default App;
