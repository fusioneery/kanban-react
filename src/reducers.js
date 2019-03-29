import shortid from 'shortid';
import { loadFromLS, changePosition, changeColumn } from './enhancers.js';
import {
	BACKLOG,
	TASK_ADD,
	TASK_EDIT,
	TASK_REMOVE,
	TASK_CHANGE_POS,
	TASK_CHANGE_COL,
	ELEM_HEIGHT_ADD,
	SHOW_HINT,
} from './actionTypes.js';

const initialState = {
	cols: loadFromLS(),
	error: null,
	elemsHeight: 0,
	hint: false,
	hintText: 'dfgdfgfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdgsfwewe43t45g',
};

export function rootReducer(state = initialState, { payload, type }) {
	let columnName;
	if (payload && payload.columnName) {
		columnName = payload.columnName;
	}
	switch (type) {
		case TASK_ADD:
			return {
				...state,
				cols: {
					...state.cols,
					[BACKLOG]: [
						...state.cols[BACKLOG],
						{
							id: shortid.generate(),
							name: payload,
							desc: '',
						},
					],
				},
			};
		case TASK_REMOVE:
			return {
				...state,
				cols: {
					...state.cols,
					[columnName]: state.cols[columnName].filter((task) => task.id !== payload.id),
				},
			};
		case TASK_EDIT:
			let taskIndex = state.cols[columnName].findIndex((el) => el.id === payload.task.id);
			let newTasks = Array.from(state.cols[columnName]);
			newTasks[taskIndex] = { ...payload.task };
			return {
				...state,
				cols: {
					...state.cols,
					[columnName]: newTasks,
				},
			};
		case TASK_CHANGE_POS:
			return {
				...state,
				cols: {
					...state.cols,
					[columnName]: changePosition(state.cols[columnName], payload.from, payload.to),
				},
			};
		case TASK_CHANGE_COL:
			return {
				...state,
				cols: changeColumn(state.cols, payload.fromIndex, payload.fromBoard, payload.toIndex, payload.toBoard),
			};
		case ELEM_HEIGHT_ADD:
			return {
				...state,
				elemsHeight: state.elemsHeight + payload,
			};
		case SHOW_HINT:
			return {
				...state,
				hint: true,
				hintText: payload,
			};
		default:
			return state;
	}
}
