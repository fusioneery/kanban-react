import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './style.sass';
import { Droppable } from 'react-beautiful-dnd';
import { BACKLOG, IN_PROGRESS, DONE } from '../actionTypes';

const Card = React.lazy(() => import('../Card/CardContainer.jsx'));

export const handleColumnName = (type) => {
	switch (type) {
		case BACKLOG:
			return 'Backlog';
		case IN_PROGRESS:
			return 'In progress';
		case DONE:
			return 'Done';
		default:
			return 'Other';
	}
};

export default function ColumnPresentational({ tasks, columnName }) {
	const cards = tasks.map((task, index) => {
		return (
			<React.Suspense key={task.id} fallback={<Skeleton />}>
				<Card index={index} id={task.id} name={task.name} desc={task.desc} track={columnName} />
			</React.Suspense>
		);
	});
	return (
		<div className="col">
			<h3 className="col__heading">{handleColumnName(columnName)}</h3>
			<Droppable droppableId={columnName}>
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps} className="col__cards cards">
						{cards}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
}
