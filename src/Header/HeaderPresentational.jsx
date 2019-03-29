import React from 'react';
import './style.sass';
import hintImage from '../images/info.svg';
import { useTransition, animated } from 'react-spring';

export const HeaderPresentational = React.forwardRef(({ hintVisible, hintText }, ref) => {
	const transitions = useTransition(hintVisible, null, {
		from: { opacity: 0, transform: 'translateY(10px)' },
		enter: { opacity: 1, transform: 'translateY(0px)' },
		leave: { opacity: 0, transform: 'translateY(10px)' },
	});
	return (
		<header ref={ref} className="header">
			<h1 className="header__title">Task Manager</h1>
			{transitions.map(
				({ item, key, props }) =>
					item && (
						<animated.div style={props} className="hint">
							<img src={hintImage} alt="hint" className="hint__img" />
							<p className="hint__text">{hintText}</p>
						</animated.div>
					),
			)}
		</header>
	);
});
