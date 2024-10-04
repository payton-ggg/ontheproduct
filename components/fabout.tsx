import React from "react";
import Clock from "./clock";

const FirstAbout = () => {
  return (
    <div className="z-10 -mt-5 ml-0 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[62%] max-md:ml-[-30px] max-md:w-full">
          <div className="flex flex-col justify-center items-end pl-20 mt-5 max-md:max-w-full">
            <div className="text-5xl font-medium text-white leading-[67px] max-md:max-w-full max-md:text-3xl max-md:leading-[44px]">
              Transforming how your products look
            </div>
            <div className="mt-5 -mr-px text-base leading-7 text-zinc-400 max-md:max-w-full">
              Say goodbye to old-fashioned design. Step into a fresh era of
              custom made designs that lift your product appearance to new
              heights.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 max-md:ml-0">
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default FirstAbout;
