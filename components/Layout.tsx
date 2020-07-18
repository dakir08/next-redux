import React, { Fragment, Dispatch, useEffect } from "react";
import { useRouter } from "next/router";
import setCurrentState from "../redux/actionCreators/setCurrentState";
import { CurrentState } from "../redux/reducers/userInterface";
import { connect } from "react-redux";

export interface LayoutProps {
  setCurrentState: () => void;
}

const Layout: React.SFC<LayoutProps> = ({ children, setCurrentState }) => {
  const router = useRouter();
  useEffect(() => {
    setCurrentState();
  }, [router.route]);
  return <Fragment>{children}</Fragment>;
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  setCurrentState: () => dispatch(setCurrentState(CurrentState.INITIAL)),
});

export default connect(null, mapDispatchToProps)(Layout);
