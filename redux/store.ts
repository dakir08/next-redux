import { createStore, applyMiddleware, Store as ReduxStore } from "redux";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import rootReducer, { Store } from "./reducers/rootReducer";
import rootSaga from "./middlewares/rootSaga";

export interface SagaStore extends ReduxStore {
  sagaTask?: Task;
}

const makeStore: MakeStore<Store> = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper<Store>(makeStore, { debug: true });

export default wrapper;
