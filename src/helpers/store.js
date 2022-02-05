import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";

import createRootReducer from "../reducers";

const history = createBrowserHistory();

function configureStore(preloadedState) {
        const enhancers = [];

        let composeEnhancers = compose;

        if (process.env.NODE_ENV === 'development') {
                enhancers.push(applyMiddleware(logger));
                composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
        }

        const middleware = [thunk,routerMiddleware(history)];

        const composedEnhancers = composeEnhancers(applyMiddleware(...middleware), ...enhancers);
        return createStore(createRootReducer(history), composedEnhancers);
}

export default {history, configureStore}