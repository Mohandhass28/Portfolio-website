import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const HeroOrbit = ({
  children,
  ...props
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  shouldOrbit?: boolean;
  shouldspin?: boolean;
  spinDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(props.shouldOrbit && "animate-spin")}
        style={{ animationDuration: props.orbitDuration }}
      >
        <div
          className={clsx([""])}
          style={{
            transform: `rotate(${props.rotation}deg)`,
            width: `${props.size}px`,
            height: `${props.size}px`,
          }}
        >
          <div
            className="inline-flex"
            style={{ transform: `rotate(${props.rotation * -1}deg)` }}
          >
            <div
              className={twMerge(props.shouldspin && "animate-spin")}
              style={{ animationDuration: props.spinDuration }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
