import React from 'react';
import Card from '../Card/CardContainer.jsx';
import './style.sass';

export default function ColumnPresentational({ tasks, columnName }) {
	const cards = tasks.map((task) => {
		console.log(task);
		return <Card key={task.id} id={task.id} name={task.name} desc={task.desc} track={task.track} />;
	});
	return (
		<div className="col">
			<h3 className="col__heading">{columnName}</h3>
			<div className="col__cards cards">{cards}</div>
		</div>
	);
}
