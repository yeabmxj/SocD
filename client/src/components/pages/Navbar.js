import React, { Component } from "react";

import "./Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ul id="nav">
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/plantrip">Plan Trip</a></li>
					<li><a href="/interactions">Interactions</a></li>
					<li><a href="/profile">Profile</a></li>
				</ul>
			</div>
		);
	}
}

export default Navbar;