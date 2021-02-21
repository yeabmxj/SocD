import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import { get, post } from "../../utilities";


//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "608212260077-um6ciac5qbhak8jbruh70lo45to3ovai.apps.googleusercontent.com";

class LoginButton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      geolocation: undefined,
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({geolocation: [position.coords.longitude, position.coords.latitude]}); 
    });
    return (
      <>
        {this.props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.props.handleLogout}
            onFailure={(err) => console.log(err)}
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.props.handleLogin}
            onFailure={(err) => console.log(err)}
          />
        )}
        <button onChange={() => {
          post("/api/newlocation", {geolocation: this.state.geolocation})
        }}>Post Location</button>
        <button onChange={() => {
          console.log(get("/api/latestlocation"))
        }}>Check Location</button>
      </>
    );
  }
}

export default LoginButton;
