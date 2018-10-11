import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Home.css";

class Home extends Component {
  render() {
    return (
      <div className="">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <header>
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="">
                <img src={require("../images/cryptocompare.png")} alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a href="" className="nav-link">
                      <Link to="/convert"> Get Started</Link>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <main className="container caption">
          <h1 className="display-4 caption-head">
            explore the world of cryptocurrency, get all cryptocurrency
            conversion done to any currency around the world.
          </h1>
          <button className="button-start">
            <Link to="/convert"> Start Now</Link>
          </button>
        </main>
      </div>
    );
  }
}
export default Home;
