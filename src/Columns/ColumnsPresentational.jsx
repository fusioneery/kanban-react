import React from 'react';
import Column from '../Column/ColumnContainer';
import './style.sass';

export default function ColumnsPresentational({ cols }) {
	const columns = Object.entries(cols).map((entry, i) => {
		let colVal = entry[1];
		return <Column key={i} columnName={entry[0]} tasks={colVal} />;
	});
	return <main className="columns">{columns}</main>;
}
