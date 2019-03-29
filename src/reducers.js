import { TASK_ADD, TASK_EDIT, TASK_REMOVE, TASK_CHANGE_POS, TASK_CHANGE_COL } from './actions.js';
import shortid from 'shortid';
import { loadFromLS, changePosition, changeColumn } from './enhancers.js';
import { BACKLOG, IN_PROGRESS, DONE } from './actionTypes.js';

const initialState = {
	cols: loadFromLS(),
	error: null,
};

export function rootReducer(state = initialState, { payload, type }) {
	let columnName;
	if (payload) {
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
			console.log(payload);
			let taskIndex = state.cols[columnName].findIndex((el) => el.id === payload.task.id);
			let newTasks = Array.from(state.cols[columnName]);
			newTasks[taskIndex] = { ...payload.task };
			console.log(newTasks);
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
		default:
			return state;
	}
}
