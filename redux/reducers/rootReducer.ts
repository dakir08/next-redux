import { combineReducers } from "redux";
import userInterface, { UserInterfaceState } from "./userInterface";

export interface Store {
  userInterface: UserInterfaceState;
}

const rootReducer = combineReducers({ userInterface });

export default rootReducer;
