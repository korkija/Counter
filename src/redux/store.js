import {createStore, combineReducers} from 'redux';
import {calculate} from './reducers/calculate';

const reducers = combineReducers({calculate});

export const store = createStore(reducers);
