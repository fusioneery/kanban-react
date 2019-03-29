import React, { Component } from 'react';
import { FooterPresentational } from './FooterPresentational.jsx';
import { connect } from 'react-redux';
import { setClientHeight } from '../actions';

class FooterContainer extends Component {
	constructor() {
		super();
		this.ref = React.createRef();
	}

	componentDidMount() {
		this.props.setClientHeightAction(this.ref.current.clientHeight);
	}

	render() {
		return <FooterPresentational ref={this.ref} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	setClientHeightAction: (h) => dispatch(setClientHeight(h)),
});

export default connect(null, mapDispatchToProps)(FooterContainer);
