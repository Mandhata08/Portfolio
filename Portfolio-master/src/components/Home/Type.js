import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FRONT-END DEVELOPER",
          "BACK-END DEVELOPER",
          "MOBILE APP DEVELOPER",
          "DATA SCIENCE",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
