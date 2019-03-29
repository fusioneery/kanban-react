import React, { Component } from 'react';
import { ColumnsPresentational } from './ColumnsPresentational';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { taskChangePosition, taskChangeColumn } from '../../store/actions';

class ColumnsContainer extends Component {
	constructor() {
		super();
		this.ref = React.createRef();
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.ref.current.style.minHeight = window.innerHeight - this.props.elemsHeight - 80 + 'px';
		}, 1);
	};

	onDragEnd = ({ destination, source }) => {
		if (destination !== null) {
			if (destination.droppableId !== source.droppableId) {
				this.props.taskChangeColumnAction(
					source.index,
					source.droppableId,
					destination.index,
					destination.droppableId,
				);
			} else {
				if (source !== null && source.index !== destination.index) {
					this.props.taskChangePositionAction(source.index, destination.index, source.droppableId);
				}
			}
		}
	};

	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<ColumnsPresentational ref={this.ref} cols={this.props.cols} />
			</DragDropContext>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cols: state.cols,
		elemsHeight: state.elemsHeight,
	};
};

const mapDispatchToProps = (dispatch) => ({
	taskChangePositionAction: (from, to, colName) => dispatch(taskChangePosition(from, to, colName)),
	taskChangeColumnAction: (fromIndex, fromBoard, toIndex, toBoard) =>
		dispatch(taskChangeColumn(fromIndex, fromBoard, toIndex, toBoard)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsContainer);
