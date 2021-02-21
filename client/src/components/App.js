import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import LoginButton from "./pages/LoginButton.js";
import About from "./pages/About.js";
import PlanTrip from "./pages/PlanTrip.js";
import Navbar from "./pages/Navbar.js";
import TripDetails from "./pages/TripDetails.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
      geoLocation: undefined,
      //infected: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    return (
      <>
        <Navbar/>
        <Router>
          <LoginButton
            path="/"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <About
            path="/about"
          />
          <PlanTrip
            path="/plantrip"
          />
          <TripDetails
            path="/tripdetails"
          />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
