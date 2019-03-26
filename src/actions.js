export const TASK_ADD = 'TASK_ADD';
export const TASK_EDIT = 'TASK_EDIT';
export const TASK_REMOVE = 'TASK_REMOVE';

export function taskAdd(name) {
	return {
		type: 'TASK_ADD',
		payload: name,
	};
}

export function taskEdit(task) {
	return {
		type: 'TASK_EDIT',
		payload: task,
	};
}

export function taskRemove(id) {
	return {
		type: 'TASK_REMOVE',
		payload: id,
	};
}
