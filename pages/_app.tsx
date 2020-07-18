import React, { Fragment } from "react";
import { AppProps, AppContext } from "next/app";
import { END } from "redux-saga";
import wrapper, { SagaStore } from "../redux/store";
import Layout from "../components/Layout";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>Welcome to NextJS With Redux</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  };

  if (ctx.req) {
    ctx.store.dispatch(END);
    await (ctx.store as SagaStore).sagaTask?.toPromise();
  }

  return { pageProps };
};

export default wrapper.withRedux(MyApp);
