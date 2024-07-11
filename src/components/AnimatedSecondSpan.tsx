"use client";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

const AnimatedSecondSpan = () => {
  const [state, setState] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setState((prev) => !prev);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col text-center h-96">
      {/* {state && (
        <>
          <TypeAnimation
            sequence={["Eventify", 1000]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
            className="text-5xl "
          />
          <TypeAnimation
            sequence={["on", 1000]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
            className="text-5xl "
          />
          <TypeAnimation
            sequence={["every step", 1000]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
            className="text-5xl "
          />
        </>
      )} */}

      <>
        <TypeAnimation
          sequence={["Eventify", 1000]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
          className="text-5xl "
        />
        <TypeAnimation
          sequence={["on", 1000]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
          className="text-5xl "
        />
        <TypeAnimation
          sequence={["every step", 1000]}
          wrapper="span"
          speed={50}
          repeat={0}
          cursor={false}
          className="text-5xl "
        />
      </>
    </div>
  );
};

export default AnimatedSecondSpan;
