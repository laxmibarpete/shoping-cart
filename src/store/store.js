import reducers from "./reducers";
// import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';

const logger = createLogger()
const store = createStore(reducers, compose(applyMiddleware(logger), window.devToolsExtension
  ? window.devToolsExtension()
  : f => f));

export default store;