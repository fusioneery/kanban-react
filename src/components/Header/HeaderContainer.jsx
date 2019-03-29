import React, { Component } from 'react';
import { HeaderPresentational } from './HeaderPresentational';
import { connect } from 'react-redux';
import { setClientHeight } from '../../store/actions';

class HeaderContainer extends Component {
	constructor() {
		super();
		this.ref = React.createRef();
	}

	componentDidMount = () => {
		this.props.setHeightElementAction(this.ref.current.clientHeight);
	};

	render() {
		return (
			<HeaderPresentational hintText={this.props.hintText} hintVisible={this.props.hintVisible} ref={this.ref} />
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	setHeightElementAction: (h) => dispatch(setClientHeight(h)),
});

const mapStateToProps = (state) => ({
	hintText: state.hintText,
	hintVisible: state.hint,
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
