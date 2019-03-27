import React, { Component } from 'react';
import CardPresentational from './CardPresentational';
import { connect } from 'react-redux';
import { taskEdit, taskRemove } from '../actions';

class CardContainer extends Component {
	constructor() {
		super();
		console.log(this.props);
		this.state = {
			nameVal: '',
			descVal: '',
			isEditing: false,
		};
	}

	edit = () => {
		this.setState((prevState) => {
			return {
				...prevState,
				isEditing: true,
			};
		});
	};

	save = () => {
		this.props.taskEditAction({
			id: this.props.id,
			name: this.state.nameVal,
			desc: this.state.descVal,
			track: this.props.track,
		});
		this.setState((prevState) => {
			return {
				...prevState,
				isEditing: false,
			};
		});
	};

	remove = () => {
		this.props.taskRemoveAction(this.props.id);
	};

	cancel = () => {
		this.setState((prevState) => {
			return {
				nameVal: this.props.name,
				descVal: this.props.desc,
				isEditing: false,
			};
		});
	};

	changeDescValue = (val) => {
		this.setState((prevState) => {
			return {
				...prevState,
				descVal: val,
			};
		});
	};

	changeNameValue = (val) => {
		console.log(val);
		this.setState((prevState) => {
			return {
				...prevState,
				nameVal: val,
			};
		});
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (prevState.nameVal == '' || prevState.descVal == '') {
			return {
				...prevState,
				nameVal: nextProps.name,
				descVal: nextProps.desc,
			};
		} else {
			return prevState;
		}
	}

	render() {
		return (
			<CardPresentational
				name={this.state.nameVal}
				desc={this.state.descVal}
				onEdit={() => this.edit()}
				onSave={() => this.save()}
				onRemove={() => this.remove()}
				onCancel={() => this.cancel()}
				isEditing={this.state.isEditing}
				handleDescChange={(e) => this.changeDescValue(e.target.value)}
				handleNameChange={(e) => this.changeNameValue(e.target.value)}
			/>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		taskEditAction: (task) => dispatch(taskEdit(task)),
		taskRemoveAction: (id) => dispatch(taskRemove(id)),
	};
};

export default connect(null, mapDispatchToProps)(CardContainer);