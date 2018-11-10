import { createStore, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import { saveState } from "./localStorage";
import throttle from "lodash/throttle";
import reducers from "./app/reducers";

const loggerMiddleware = createLogger();
const reduxMiddlewares = [thunk, loggerMiddleware];

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware.apply(undefined, reduxMiddlewares)
  );
  store.subscribe(throttle(() => saveState(store.getState()), 1000));
  return store;
};

export default configureStore;
