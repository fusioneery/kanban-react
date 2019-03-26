import React from 'react';
import './style.sass';

export default function FooterPresentational() {
	return (
		<footer className="footer">
			<p className="copyright">
				<a href="http://vladabramov.pro" className="copyright__link">
					Vlad Abramov
				</a>{' '}
				(c) made with <i className="heart">❤</i>
			</p>
		</footer>
	);
}
