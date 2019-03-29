import { BACKLOG, IN_PROGRESS, DONE } from './actionTypes.js';

export const saveToLS = (cols) => {
	let serializedData = JSON.stringify(cols);
	localStorage.setItem('kanban-react', serializedData);
	console.log('saved', localStorage.getItem('kanban-react'));
};

export const loadFromLS = () => {
	let serializedData = localStorage.getItem('kanban-react');
	if (
		serializedData === null ||
		serializedData === undefined ||
		serializedData === '{}' ||
		serializedData === 'undefined'
	) {
		console.log(BACKLOG);
		let obj = {
			[BACKLOG]: [],
			[IN_PROGRESS]: [],
			[DONE]: [],
		};
		console.log('null', obj);
		return obj;
	} else {
		return JSON.parse(serializedData);
	}
};

export const changePosition = (array, fromIndex, toIndex) => {
	let arr = Array.from(array);
	let element = arr[fromIndex];
	arr.splice(fromIndex, 1);
	arr.splice(toIndex, 0, element);
	return arr;
};

export const changeColumn = (cols, fromIndex, fromBoard, toIndex, toBoard) => {
	let obj = {
		...cols,
	};
	let element = obj[fromBoard][fromIndex];
	obj[fromBoard].splice(fromIndex, 1);
	obj[toBoard].splice(toIndex, 0, element);
	return obj;
};
