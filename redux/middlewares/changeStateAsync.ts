import { put } from "redux-saga/effects";
import {
  UserInterfaceActionTypes,
  UserInterfaceAction,
  CurrentState,
} from "../reducers/userInterface";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export default function* changeStateAsync() {
  yield delay(1000);
  yield put<UserInterfaceAction>({
    type: UserInterfaceActionTypes.SET_CURRENT_STATE,
    payload: CurrentState.IDLE,
  });
}
