import React from 'react';
import './style.sass';

export const FooterPresentational = React.forwardRef((props, ref) => {
	return (
		<footer ref={ref} className="footer">
			<p className="copyright">
				{' '}
				Made with <i className="heart">❤</i> by{' '}
				<a href="http://vladabramov.pro" className="copyright__link link">
					Vlad Abramov
				</a>
			</p>
		</footer>
	);
});
