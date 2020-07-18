import {
  UserInterfaceAction,
  UserInterfaceActionTypes,
} from "../reducers/userInterface";

export default (): UserInterfaceAction => ({
  type: UserInterfaceActionTypes.SET_CURRENT_STATE_ASYNC,
});
