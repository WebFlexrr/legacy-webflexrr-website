"use client";
import useIsomorphicLayoutEffect from "@/helper/isomorphicEffect";
import gsap from "gsap";
import React, { type FC, useRef } from "react";

interface PulseCircleProps {
  flowDirection?: string;
  scale?: string;
}

const PulseCircle: FC<PulseCircleProps> = ({ flowDirection }) => {
  const pulseCircleLine = useRef<HTMLDivElement>(null);
  // const pulseCircleRed = useRef<HTMLDivElement>(null);
  // const pulseLine = useRef<HTMLDivElement>();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".pulseCircleRed", {
        scale: 0.8,
        repeat: -1,
        duration: 1,
        yoyo: true,
        ease: "power2.inOut",
      });
      gsap.to(".pulseLine", {
        scaleY: 0.8,
        repeat: -1,
        duration: 1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={pulseCircleLine}
      className={`pulseCircleLine ${
        flowDirection === "right"
          ? "flex-row-reverse"
          : flowDirection === "bottom"
            ? "flex-col-reverse "
            : ""
      } w-fit flex  items-center justify-center gap-4`}
    >
      {flowDirection === "bottom" ? (
        <div className=" pulseLine w-[2px] h-[3rem] bg-subHeading" />
      ) : (
        <div className="w-[2rem] lg:w-[3rem] h-[2px] bg-subHeading" />
      )}
      <div
        // ref={pulseCircleRed}
        className="pulseCircleRed relative w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary"
      />
    </div>
  );
};

export default PulseCircle;
