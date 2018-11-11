import { createStore, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import { saveState, loadState } from "./localStorage";
// import throttle from "lodash/throttle";

const loggerMiddleware = createLogger();
const reduxMiddlewares = [thunk, loggerMiddleware];

const configureStore = () => {
  // const persistedState = loadState();
  const store = createStore(
    reducers,
    // persistedState,
    applyMiddleware.apply(undefined, reduxMiddlewares)
  );
  // store.subscribe(throttle(() => saveState(store.getState()), 1000));
  // console.log(store.getState());
  return store;
};

export default configureStore;
