import React from "react";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

if (process.env.NODE_ENV !== "production") {
  var middleware = composeWithDevTools(applyMiddleware(thunk, logger));
} else {
  var middleware = applyMiddleware(thunk);
}

const store = createStore(rootReducer, middleware);

export default ({ element }) => <Provider store={store}>{element}</Provider>;
