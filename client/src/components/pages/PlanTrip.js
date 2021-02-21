import React, { Component } from "react";

class PlanTrip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wearingMask: true,
			testedNegative: true,
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
			<form>
				<label>
					Wearing a mask: 
					<input
						name = "wearingMask"
						type = "boolean"
						value = {this.state.wearingMask}
						onChange = {this.handleInputChange} />
				</label>
				<br />
				<label>
					Tested Negative: 
					<input
						name = "testedNegative"
						type = "boolean"
						value = {this.state.testedNegative}
						onChange = {this.handleInputChange} />
				</label>
			</form>
		);
	}	
}

export default PlanTrip;