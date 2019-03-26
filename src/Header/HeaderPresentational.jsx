import React from 'react';
import './style.sass';

export default function HeaderPresentational({ taskVisible }) {
	return (
		<header className="header">
			<h1 className="header__title">Task Manager</h1>
			{taskVisible && (
				<div className="hint">
					<img src="./img/info.svg" alt="hint" className="hint__img" />
					<p className="hint__text">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ad velit harum corrupti
						mollitia voluptate.
					</p>
				</div>
			)}
		</header>
	);
}
