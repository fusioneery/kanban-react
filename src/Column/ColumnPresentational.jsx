import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './style.sass';

const Card = React.lazy(() => import('../Card/CardContainer.jsx'));

export default function ColumnPresentational({ tasks, columnName }) {
	const cards = tasks.map((task) => {
		console.log(task);
		return (
			<React.Suspense key={task.id} fallback={<Skeleton />}>
				<Card id={task.id} name={task.name} desc={task.desc} track={task.track} />
			</React.Suspense>
		);
	});
	return (
		<div className="col">
			<h3 className="col__heading">{columnName}</h3>
			<div className="col__cards cards">{cards}</div>
		</div>
	);
}
