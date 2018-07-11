import login from './loginReducer';
import { combineReducers } from 'redux';
import dashboard from './dashboardReducer';


const reducers = {}

export default combineReducers({...reducers, login, dashboard});