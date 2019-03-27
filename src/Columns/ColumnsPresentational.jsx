import React from 'react';
import Column from '../Column/ColumnPresentational';
import { BACKLOG, IN_PROGRESS, DONE } from '../reducers';
import './style.sass';

export default function ColumnsPresentational({ tasks }) {
	let columns = [
		{
			name: 'Backlog',
			tasks: tasks.filter((el) => el.track === BACKLOG),
		},
		{
			name: 'In progress',
			tasks: tasks.filter((el) => el.track === IN_PROGRESS),
		},
		{
			name: 'Done',
			tasks: tasks.filter((el) => el.track === DONE),
		},
	].map((col, i) => {
		return <Column key={i} columnName={col.name} tasks={col.tasks} />;
	});
	return <main className="columns">{columns}</main>;
}
