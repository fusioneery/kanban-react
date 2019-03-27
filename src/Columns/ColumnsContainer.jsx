import React, { Component } from 'react';
import Columns from './ColumnsPresentational';
import { connect } from 'react-redux';

class ColumnsContainer extends Component {
	render() {
		return <Columns tasks={this.props.tasks} />;
	}
}

const mapStateToProps = (state) => ({
	tasks: state.tasks,
});

export default connect(mapStateToProps)(ColumnsContainer);
