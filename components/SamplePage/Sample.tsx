import React, { Fragment, useEffect, Dispatch } from "react";
import Link from "next/link";
import { Store } from "../../redux/reducers/rootReducer";
import { CurrentState } from "../../redux/reducers/userInterface";
import { connect } from "react-redux";
import setCurrentStateAsync from "../../redux/actionCreators/setCurrentStateAsync";
import styled from "../styled/styled";

const Redirect = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

interface HighLightProp {
  color: string;
}

const HighLight = styled("span")<HighLightProp>`
  color: ${(props) => props.color};
`;

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
      <h1>
        Sample Page With <HighLight color="Red">Redux</HighLight> and{" "}
        <HighLight color="orange">Emotion</HighLight>
      </h1>
      <p>
        Current State: <HighLight color="blue">{currentAppState}</HighLight>
      </p>
      <p>
        Return to{" "}
        <Link href="/">
          <Redirect>Home Page</Redirect>
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
