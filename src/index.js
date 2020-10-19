import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";

import App from "./App";
import counterReducer from "./store/reducers/counter";
import resultsReducer from "./store/reducers/results";

const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultsReducer,
});

const logger = store => {
	return next => {
		return action => {
			console.log("[Middleware] Dispatching");
			const result = next(action);
			console.log("[Middleware] next state", store.getState());
			return result;
		};
	};
};

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
