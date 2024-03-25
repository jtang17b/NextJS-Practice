import { Fragment } from "react";
import Link from "next/link";
const NewsPage = () => {
  return (
    <Fragment>
      <h1>This is news page</h1>
      <ul>
        <li>
          <Link href="/news/test">NextJs is a great framework</Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
