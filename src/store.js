import { createStore, compose } from 'redux';
import { rootReducer } from './reducers.js';
import { saveToLS } from './enhancers.js';

const composedEnhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, composedEnhancers);

store.subscribe(() => {
	saveToLS(store.getState().cols);
});
