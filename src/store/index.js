import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
});
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
