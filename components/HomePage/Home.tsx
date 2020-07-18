import React, { Fragment } from "react";
import Link from "next/link";

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <Fragment>
      <h1>Hello NextJS and Redux </h1>
      <p>
        Visit my{" "}
        <Link href="/sample">
          <a>Sample Page</a>
        </Link>{" "}
        to see the NextJS work with Redux Store and Redux Saga
      </p>
      <p>Please clear the sample page with this instruction:</p>
      <ul>
        <li>
          Delete the <b>SamplePage/</b> folder
        </li>
        <li>
          Delete the <b>Pages/Sample.tsx</b>
        </li>
        <li>
          Remove the <b>useEffect()</b> function,{" "}
          <b>const router = useRouter();</b> in <b>Components/Layout.tsx</b>
        </li>
      </ul>
    </Fragment>
  );
};

export default Home;
