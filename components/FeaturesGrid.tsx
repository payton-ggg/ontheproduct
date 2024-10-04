import React from "react";

function FeatureGrid() {
  return (
    <>
      <div className="flex flex-col text-center text-white">
        <div className="flex flex-wrap justify-center items-center max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch p-4 my-auto min-h-[155px] min-w-[240px] w-[244px] border-r border-b border-[#FF8125] border-opacity-10">
            <div className="text-lg font-medium leading-8">Design Board</div>
            <div className="mt-4 text-sm font-light leading-6">
              Add as many design requests as you want to your personal board.
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch p-4 my-auto min-h-[155px] min-w-[240px] w-[244px] border-r border-b border-[#FF8125] border-opacity-10">
            <div className="text-lg font-medium leading-8">
              Instant Delivery
            </div>
            <div className="mt-4 text-sm font-light leading-6">
              Get your design within just a few hours\days of adding it to your
              board.
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-4 py-7 my-auto min-h-[155px] min-w-[240px] w-[244px] border-b border-[#FF8125] border-opacity-10">
            <div className="text-lg font-medium leading-8">Fixed Fee</div>
            <div className="mt-4 text-sm font-light leading-6">
              There are no surprises here! Pay the same fixed amount.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch p-4 my-auto min-h-[155px] min-w-[240px] w-[244px] border-r border-[#FF8125] border-opacity-10">
            <div className="text-lg font-medium leading-8">
              Pause at any time
            </div>
            <div className="mt-4 text-sm font-light leading-6">
              Pause your subscription when you don't need the design and resume
              when you do.
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch p-4 my-auto min-h-[155px] min-w-[240px] w-[244px] border-r border-[#FF8125] border-opacity-10">
            <div className="text-lg font-medium leading-8">Uniqueness</div>
            <div className="mt-4 text-sm font-light leading-6">
              Get the highest quality design, developed clearly according to
              your requirement.
            </div>
          </div>
          <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-4 py-7 my-auto min-h-[155px] min-w-[240px] w-[244px]">
            <div className="text-lg font-medium leading-8">Flexible plan</div>
            <div className="mt-4 text-sm font-light leading-6">
              Scale your plan to suit your needs, and pause anytime.
            </div>
          </div>
        </div>
      </div>{" "}
      <style>{`builder-component { max-width: none !important; }`}</style>{" "}
    </>
  );
}

export default FeatureGrid;
