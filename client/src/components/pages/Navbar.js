import React, { Component } from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';

import "./Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ul id="nav">
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Plan Trip</a></li>
					<li><a href="#">Interactions</a></li>
					<li><a href="#">Profile</a></li>
				</ul>
			</div>
		);
	}
}

export default Navbar;