import React from 'react';
import Column from '../Column/ColumnContainer';
import './style.sass';

export const ColumnsPresentational = React.forwardRef(({ cols }, ref) => {
	const columns = Object.entries(cols).map((entry, i) => {
		let colVal = entry[1];
		return <Column key={i} columnName={entry[0]} tasks={colVal} />;
	});
	return (
		<main ref={ref} className="columns">
			{columns}
		</main>
	);
});
