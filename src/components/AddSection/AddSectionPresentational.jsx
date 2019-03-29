import React from 'react';
import './style.sass';

export const AddSectionPresentational = React.forwardRef(({ onAdd, onTaskNameChange, taskName }, ref) => {
	return (
		<div ref={ref} className="add">
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
});
