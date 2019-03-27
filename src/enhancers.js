export const saveToLS = (tasks) => {
	let serializedData = JSON.stringify(tasks);
	localStorage.setItem('kanban-react', serializedData);
	console.log('saved', localStorage.getItem('kanban-react'));
};

export const loadFromLS = () => {
	let serializedData = localStorage.getItem('kanban-react');
	if (serializedData === (null || undefined || '{}')) {
		return [];
	} else {
		return JSON.parse(serializedData);
	}
};
