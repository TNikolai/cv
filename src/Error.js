import React from "react";
import { Link } from "react-router-dom";

const Error = ({ context }) => {
  if (context) {
    console.log({ context });
    context.status = 404;
  }

  return (
    <div>
      <h1> That page doesn't exists! </h1>
      <br />
      <br />
      <Link to="/">
        <h2> Return to CV </h2>
      </Link>
    </div>
  );
};

export default Error;
