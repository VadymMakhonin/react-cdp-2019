import { createStore, applyMiddleware } from 'redux';
import { reducer} from "./reducer";
import { logger, thunk } from './middlewares'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(reducer,
    composeEnhancers(applyMiddleware(logger, thunk)));