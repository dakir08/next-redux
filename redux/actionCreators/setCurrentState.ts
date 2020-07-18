import {
  CurrentState,
  UserInterfaceAction,
  UserInterfaceActionTypes,
} from "../reducers/userInterface";

export default (currentState: CurrentState): UserInterfaceAction => ({
  type: UserInterfaceActionTypes.SET_CURRENT_STATE,
  payload: currentState,
});
