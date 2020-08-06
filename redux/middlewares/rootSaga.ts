import { takeEvery, all } from "redux-saga/effects";
import { UserInterfaceActionTypes } from "../reducers/userInterface";
import changeStateAsync from "./changeStateAsync";

function* initalSaga() {
  yield takeEvery(
    UserInterfaceActionTypes.SET_CURRENT_STATE_ASYNC,
    changeStateAsync
  );
}

export default function* rootSaga(): any {
  yield all([initalSaga()]);
}
