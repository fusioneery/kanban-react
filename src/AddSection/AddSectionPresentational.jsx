import React from 'react';
import './style.sass';

export default function AddSectionPresentational({ onAdd, onTaskNameChange, taskName }) {
	return (
		<div className="add">
			<p className="add__desc">Add a new task</p>
			<div className="add__container input-group">
				<input
					type="text"
					onChange={onTaskNameChange}
					value={taskName}
					className="input"
					placeholder="Task description"
				/>
				<button onClick={onAdd} className="button button--submit">
					+ Add task
				</button>
			</div>
		</div>
	);
}
