import React, { Fragment, useEffect, Dispatch } from "react";
import Link from "next/link";
import { Store } from "../../redux/reducers/rootReducer";
import { CurrentState } from "../../redux/reducers/userInterface";
import { connect } from "react-redux";
import setCurrentStateAsync from "../../redux/actionCreators/setCurrentStateAsync";

export interface SampleProps {
  currentAppState: CurrentState;
  setCurrentStateAsync: () => void;
}

const Sample: React.SFC<SampleProps> = ({
  currentAppState,
  setCurrentStateAsync,
}) => {
  useEffect(() => {
    setCurrentStateAsync();
  }, []);

  return (
    <Fragment>
      <h1>Sample Page</h1>
      <p>Current State: {currentAppState}</p>
      <p>
        Return to{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </Fragment>
  );
};

const mapStateToProps = (state: Store) => ({
  currentAppState: state.userInterface.currentState,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setCurrentStateAsync: () => dispatch(setCurrentStateAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
