import React from "react";
import { AppContext } from "../../APP/AppProvider";

export default function Welcome({ firstVisit }) {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            Welcome to Crypto Dashboard, please select your favorite coins to
            begin.{" "}
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
}