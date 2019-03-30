import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './reducers.js';
import { saveToLS } from './enhancers.js';
import thunk from 'redux-thunk';

const composedEnhancers = compose(
	applyMiddleware(thunk),
	(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose,
);

export const store = createStore(rootReducer, composedEnhancers);

store.subscribe(() => {
	saveToLS(store.getState().cols);
});
