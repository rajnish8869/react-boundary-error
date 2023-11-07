import React from "react";
import "./App.css";
import MainPage from "./MainPage";
import NotFound from "../src/pages/NotFound";
import { Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};
export default App;
