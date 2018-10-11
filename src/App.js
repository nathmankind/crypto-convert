import React, { Component } from "react";
// import logo from "./logo.svg";
import Home from "./components/Homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Convert from "./components/CryptoConvert";
import ExchangeRateCard from "./components/DisplayRates";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/convert" component={ExchangeRateCard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
