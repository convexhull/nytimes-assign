import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';

import articlesReducer from './articles/reducer';



const rootReducer = combineReducers({
    articles: articlesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(Thunk)));

export default store;