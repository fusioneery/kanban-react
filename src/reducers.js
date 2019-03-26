import { TASK_ADD, TASK_EDIT, TASK_REMOVE } from './actions.js';
import shortid from 'shortid';

const initialState = {
	tasks: [],
	error: null,
};

export const BACKLOG = 'BACKLOG';
export const IN_PROGRESS = 'IN_PROGRESS';
export const DONE = 'DONE';

export function rootReducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case TASK_ADD:
			return {
				...state,
				tasks: [
					...state.tasks,
					{
						id: shortid.generate(),
						track: BACKLOG,
						name: action.payload,
						desc: '',
					},
				],
			};
		case TASK_REMOVE:
			return {
				...state,
				tasks: state.tasks.filter((task) => task.id !== action.payload),
			};
		case TASK_EDIT:
			let taskIndex = state.tasks.findIndex((el) => el.id === action.payload.id);
			let newTasks = state.tasks.slice();
			newTasks[taskIndex] = action.payload;
			return {
				...state,
				tasks: newTasks,
			};
		default:
			return state;
	}
}
