export const TASK_ADD = 'TASK_ADD';
export const TASK_EDIT = 'TASK_EDIT';
export const TASK_REMOVE = 'TASK_REMOVE';
export const TASK_CHANGE_POS = 'TASK_CHANGE_POS';
export const TASK_CHANGE_COL = 'TASK_CHANGE_COL';

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
