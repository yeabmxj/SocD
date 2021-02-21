import React, { Component } from "react";

import TripDetails from "./TripDetails.js"

class PlanTrip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wearingMask: false,
			testedNegative: false,
		};

		this.handleInputChange = this.handleInputChange.bind(this);

	}

	handleInputChange(evemt) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return(
			<div>
			<form>
				<label>
					Wearing a mask: 
					<input
						name = "wearingMask"
						type = "checkbox"
						checked = {this.state.wearingMask}
						onChange = {this.handleInputChange} />
				</label>
				<br />
				<label>
					Tested Negative: 
					<input
						name = "testedNegative"
						type = "checkbox"
						checked = {this.state.testedNegative}
						onChange = {this.handleInputChange} />
				</label>
			</form>
			<TripDetails testedNegative={this.state.testedNegative} wearingMask={this.state.wearingMask} />
			</div>
		);
	}	
}

export default PlanTrip;