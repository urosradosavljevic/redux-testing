import { createStore, compose } from "redux";

import reducers from "../reducers";

const configureStore = (preloadedState) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, preloadedState, composeEnhancers());

  // https://redux.js.org/recipes/configuring-your-store#hot-reloading
  if (module.hot) {
    module.hot.accept("../reducers/index", () => {
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

const store = configureStore();

export default store;
