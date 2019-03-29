import React, { Component } from 'react';
import Column from './ColumnPresentational';

export default class ColumnContainer extends Component {
	render() {
		return <Column {...this.props} />;
	}
}
