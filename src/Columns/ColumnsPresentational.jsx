import React from 'react';
import './style.sass';
import editIcon from '../images/edit.svg';
import removeIcon from '../images/remove.svg';

export default function ColumnsPresentational() {
	return (
		<main className="columns">
			<div className="col">
				<h3 className="col__heading">Backlog</h3>
				<div className="col__cards cards">
					<div className="card">
						<div className="card__heading">Task #1</div>
						<div className="card__desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, deleniti.
						</div>
						<div className="card__actions actions">
							<div className="action">
								<img src={editIcon} alt="edit" className="action__img" />
							</div>
							<div className="action">
								<img src={removeIcon} alt="remove" className="action__img" />
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card__heading">Task #1</div>
						<div className="card__desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, deleniti.
						</div>
						<div className="card__actions actions" />
					</div>
				</div>
			</div>
		</main>
	);
}
