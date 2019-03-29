import React, { Component } from 'react';
import { AddSectionPresentational } from './AddSectionPresentational';
import { connect } from 'react-redux';
import { taskAdd, setClientHeight } from '../../store/actions';

class AddSectionContainer extends Component {
	constructor() {
		super();
		this.state = {
			taskName: '',
		};
		this.ref = React.createRef();
	}

	handleTaskName = (name) => {
		this.setState({
			taskName: name,
		});
	};

	taskAdd = () => {
		this.props.taskAddAction(this.state.taskName);
		this.setState({ taskName: '' });
	};

	componentDidMount = () => {
		this.props.setHeightElementAction(this.ref.current.clientHeight);
	};

	render() {
		return (
			<AddSectionPresentational
				ref={this.ref}
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
		setHeightElementAction: (h) => dispatch(setClientHeight(h)),
	};
};

export default connect(null, mapDispatchToProps)(AddSectionContainer);
