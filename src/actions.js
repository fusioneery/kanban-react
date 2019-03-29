import {
	ELEM_HEIGHT_ADD,
	TASK_CHANGE_COL,
	TASK_CHANGE_POS,
	TASK_REMOVE,
	TASK_EDIT,
	TASK_ADD,
	SHOW_HINT,
} from './actionTypes';

// import { dispatch } from './store';

export function taskAdd(name) {
	return {
		type: TASK_ADD,
		payload: name,
	};
}

export function taskEdit(task, columnName) {
	return {
		type: TASK_EDIT,
		payload: {
			task: task,
			columnName: columnName,
		},
	};
}

export function taskRemove(id, columnName) {
	return {
		type: TASK_REMOVE,
		payload: {
			id: id,
			columnName: columnName,
		},
	};
}

export function deleteTaskAndShowHint(id, columnName) {
	return function(dispatch) {
		dispatch(taskRemove(id, columnName));
		dispatch(showDeleteHint());
	};
}

export function showDeleteHint() {
	return {
		type: SHOW_HINT,
		payload: 'Задача была успешно удалена.',
	};
}

export function taskChangePosition(from, to, colName) {
	return {
		type: TASK_CHANGE_POS,
		payload: {
			from: from,
			to: to,
			columnName: colName,
		},
	};
}

export function taskChangeColumn(fromIndex, fromBoard, toIndex, toBoard) {
	return {
		type: TASK_CHANGE_COL,
		payload: {
			fromIndex: fromIndex,
			fromBoard: fromBoard,
			toIndex: toIndex,
			toBoard: toBoard,
		},
	};
}

export function setClientHeight(height) {
	return {
		type: ELEM_HEIGHT_ADD,
		payload: height,
	};
}
