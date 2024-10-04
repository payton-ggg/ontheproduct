"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function OnceTitle() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <motion.div className="max-w-[644px] mx-2" data-aos="fade-up">
      <div className="text-center text-black text-4xl font-bold monsr">
        Totally Efficient, Always Ahead
      </div>
      <div className="w-auto text-center text-gray-400 text-xl font-normal nokora mt-[23px] mb-[10px]">
        No more endless meetings! OnTheProduct has streamlined the process for
        efficiency. Manage your design projects seamlessly with our intuitive
        platform.
      </div>
    </motion.div>
  );
}

export function TitleAbout() {
  return (
    <motion.div className="flex flex-col justify-center">
      <div className="self-center text-5xl font-medium text-center text-white max-md:max-w-full">
        Transforming How Your Products Look
      </div>
      <div className="self-center mt-8 text-base leading-8 text-center text-white max-w-[700px] max-md:max-w-full">
        Say goodbye to old-fashioned design. Step into a fresh era of custom
        made designs that lift your product appearance to new heights.
      </div>
    </motion.div>
  );
}

export function TwiceTitle() {
  return (
    <motion.div className="mx-1">
      <div className="text-white text-center text-4xl font-bold self-center mt-28 max-md:max-w-full max-md:mt-10">
        Your membership perks
      </div>
      <div className="text-gray-400 text-center text-xl self-center max-w-[644px] mt-6 max-md:max-w-full mb-[58px]">
        Great benefits that make us your one-stop for design needs. Really.
      </div>
    </motion.div>
  );
}

export function ThirdTitle() {
  return (
    <motion.div>
      <div className="self-center mt-20 text-5xl font-medium text-center text-white whitespace-nowrap max-md:mt-10">
        Recent Work
      </div>
      <div className="self-center mt-5 text-xl leading-8 text-center text-white max-md:max-w-full">
        Recent wins with designs boosting sales.
      </div>
    </motion.div>
  );
}
