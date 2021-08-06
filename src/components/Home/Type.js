import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'I am a Aspiring Full stack web developer',
          'I Love Coding',
          'I Love exploring new things',
          'I love building products',
          'I am Yoga Enthusiast',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
