import React, { Component } from 'react';
import CardPresentational from './CardPresentational';
import { connect } from 'react-redux';
import { taskEdit, taskRemove } from '../actions';
import { Draggable } from 'react-beautiful-dnd';

class CardContainer extends Component {
	constructor() {
		super();
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
		this.props.taskEditAction(
			{
				id: this.props.id,
				name: this.state.nameVal,
				desc: this.state.descVal,
			},
			this.props.track,
		);
		this.setState((prevState) => {
			return {
				...prevState,
				isEditing: false,
			};
		});
	};

	remove = () => {
		this.props.taskRemoveAction(this.props.id, this.props.track);
	};

	cancel = () => {
		this.setState(() => {
			return {
				nameVal: this.props.name,
				descVal: this.props.desc,
				isEditing: false,
			};
		});
	};

	changeInputValue = (type, val) => {
		let stateKey = type + 'Val';
		this.setState((prevState) => {
			return {
				...prevState,
				[stateKey]: val,
			};
		});
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		if (prevState.nameVal === '' && prevState.descVal === '') {
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
			<Draggable draggableId={this.props.id} index={this.props.index}>
				{(provided) => (
					<CardPresentational
						innerRef={provided.innerRef}
						name={this.state.nameVal}
						desc={this.state.descVal}
						onEdit={() => this.edit()}
						onSave={() => this.save()}
						onRemove={() => this.remove()}
						onCancel={() => this.cancel()}
						isEditing={this.state.isEditing}
						handleInputChange={(type, e) => this.changeInputValue(type, e.target.value)}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					/>
				)}
			</Draggable>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		taskEditAction: (task, colName) => dispatch(taskEdit(task, colName)),
		taskRemoveAction: (id, board) => dispatch(taskRemove(id, board)),
	};
};

export default connect(null, mapDispatchToProps)(CardContainer);
