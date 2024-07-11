"use client";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const AnimatedFirstSpan = () => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col text-center mb-5">
      {state && (
        <>
          <TypeAnimation
            sequence={["From vision", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={false}
          className="text-5xl "

          />
          <TypeAnimation
            sequence={["to", 1000]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            cursor={false}
          className="text-5xl "

          />
          <TypeAnimation
            sequence={["reality", 1000]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
            cursor={false}
          className="text-5xl "

          />
        </>
      )}
    </div>
  );
};

export default AnimatedFirstSpan;
