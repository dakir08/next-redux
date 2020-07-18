export enum CurrentState {
  INITIAL = "INITIAL",
  IDLE = "IDLE",
}

export enum UserInterfaceActionTypes {
  SET_CURRENT_STATE = "SET THE CURRENT STATE OF INTERFACE",
  SET_CURRENT_STATE_ASYNC = "ASYNC",
}

export type UserInterfaceAction =
  | {
      type: UserInterfaceActionTypes.SET_CURRENT_STATE;
      payload: CurrentState;
    }
  | {
      type: UserInterfaceActionTypes.SET_CURRENT_STATE_ASYNC;
    };

export interface UserInterfaceState {
  currentState: CurrentState;
}

export default (
  state: UserInterfaceState = { currentState: CurrentState.INITIAL },
  action: UserInterfaceAction
) => {
  switch (action.type) {
    case UserInterfaceActionTypes.SET_CURRENT_STATE:
      return { ...state, currentState: action.payload };
    default:
      return { ...state };
  }
};
