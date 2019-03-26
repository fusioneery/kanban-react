import React, { Component } from 'react';
import AddSection from './AddSectionPresentational';
import { connect } from 'react-redux';
import { taskAdd } from '../actions';

class AddSectionContainer extends Component {
	constructor() {
		super();
		this.state = {
			taskName: '',
		};
	}

	handleTaskName = (name) => {
		this.setState({
			taskName: name,
		});
	};

	taskAdd = () => {
		this.props.taskAddAction(this.state.taskName);
	};

	render() {
		return (
			<AddSection
				onTaskNameChange={(e) => this.handleTaskName(e.target.value)}
				taskName={this.state.taskName}
				onAdd={() => this.taskAdd()}
			/>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		taskAddAction: (name) => dispatch(taskAdd(name)),
	};
};

export default connect(null, mapDispatchToProps)(AddSectionContainer);
