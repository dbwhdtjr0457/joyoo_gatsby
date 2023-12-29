import React from "react";
import { Link } from "gatsby";

const ErrorPage = function () {
  return (
    <div>
      <h1>404 Page</h1>
      <Link to="/">Go to index page</Link>
    </div>
  );
};

export default ErrorPage;
