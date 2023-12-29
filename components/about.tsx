"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Diamond from "@/public/diamond.svg"
import Mail from "@/public/mail.svg"
import Clock from "@/public/clock.svg"

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center max-w-[900px] leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      
      <motion.div
        className="text-center leading-8 mb-40 scroll-mt-28 mx-3"
      >
        <div className="gap-5 flex max-md:flex-col-950 max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[31%] max-md:w-full-next max-md:ml-0" data-aos="fade-up">
            <div className="border bit-shadow bg-white bg-opacity-10 flex grow flex-col items-stretch w-full px-4 py-12 rounded-2xl border-solid border-white max-md:mt-4 max-md:px-5">
              <div className="text-black text-center text-8xl font-bold self-center whitespace-nowrap max-md:text-4xl">
                <Image 
                    src={Mail}
                    alt="Diamond"
                    quality={95}
                  />
              </div>
              <div className="text-black text-center text-2xl font-bold self-center w-[243px] mt-10">
                Subscription
              </div>
              <div className="text-gray-400 text-center text-base mt-5 mb-2">
                Join a plan and feel free to ask for as many designs as you need
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full-next max-md-real:ml-0" data-aos="fade-up">
            <div className="border bit-shadow bg-white bg-opacity-10 flex grow flex-col items-stretch w-full px-4 py-12 rounded-2xl border-solid border-white max-md:mt-4 max-md:px-5">
              <div className="text-black text-center text-8xl font-bold self-center whitespace-nowrap max-md:text-4xl">
                <Image 
                  src={Diamond}
                  alt="Diamond"
                  quality={95}
                />
              </div>
              <div className="text-black text-center text-2xl font-bold self-center w-[264px] mt-10">
                High Quality
              </div>
              <div className="text-gray-400 text-center text-base mt-5 mb-2">
                We care about your satisfaction, so we'll adjust the designs until
                it's 100% what you want
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full-next max-md-real:ml-0" data-aos="fade-up">
            <div className="border bit-shadow bg-white bg-opacity-10 flex grow flex-col items-center w-full py-12 px-4 rounded-2xl border-solid border-white max-md:mt-4 max-md:px-5">
              <div className="text-black text-center text-8xl font-bold whitespace-nowrap max-md:text-4xl">
                <Image 
                  src={Clock}
                  alt="Clock"
                  quality={95}
                />
              </div>
              <div className="text-black text-center text-2xl font-bold self-stretch mt-10 max-md:mt-10">
                Fast Delivery
              </div>
              <div className="text-gray-400 text-center text-base self-stretch mt-5 mb-2">
                Your design will be delivered within an average of 24 hours,
                Monday to Friday.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mx-3"
      >
        <div className="h-auto bg-white bg-opacity-20 rounded-2xl bit-shadow border border-white backdrop-blur-sm tracking-tight" data-aos="fade-down">
          <div className="max-w-[800px] pt-[30px] pl-[27px] text-left leading-[1px]">
            <span className="text-black text-xl font-bold ">“We highly endorse </span><span className="text-blue-600 text-xl font-bold ">OnTheProduct</span><span className="text-black text-xl font-bold "> for exceptional graphic design services. Their team has consistently impressed us with their creative flair, meticulous attention to detail, and unwavering commitment to embodying our brand's vision.”</span>
          </div>
          <div className="text-right text-green-400 text-2xl font-bold  pb-[28px] pt-[10px] pr-[54px]">
            <span>-Founder AinaLabs, MN Katawazy</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export function LogoExample() {
  return (
    <motion.div className="mt-[-17%] mx-0">
      <div className="bg-white opacity-20 flex items-stretch justify-between gap-5 px-5 pb-10 py-10 max-md:max-w-full w-auto max-md:flex-wrap">
        <div className="text-black text-center text-xl font-bold">
          Logo Example
        </div>
        <div className="text-black text-center text-xl font-bold">
          Logo Example
        </div>
        <div className="text-black text-center text-xl font-bold">
          Logo Example
        </div>
        <div className="text-black text-center text-xl font-bold">
          Logo Example
        </div>
        <div className="text-black text-center text-xl font-bold">
          Logo Example
        </div>
        <div className="text-black text-center text-xl font-bold">
          Logo Example
        </div>
        <div className="text-black text-center text-xl font-bold">
          Logo Example
        </div>
        <div className="text-black text-center text-xl font-bold">
          Logo Example
        </div>
        <div className="text-black text-center text-xl font-bold">
          Logo Example
        </div>
      </div>
    </motion.div>
  );
}