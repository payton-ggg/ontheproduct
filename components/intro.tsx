"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-[150px] mx-1 sm:mb-0 scroll-mt-[80rem]"
    >
      <div className="flex flex-col items-center px-20 pb-2 w-full text-base leading-7 bg-[linear-gradient(180deg,rgba(153,77,22,0.00_32.24%,rgba(255,129,37,0.15)_115.55%))] max-w-[1312px] rounded-[50px] max-md:px-5 max-md:max-w-full">
        <div className="hidden flex-col justify-center px-14 py-3 max-w-full text-center bg-neutral-900 rounded-[50px] text-neutral-200 w-[962px] max-md:px-5" />
        <div className="flex gap-3 justify-center mt-20 text-sm tracking-widest leading-6 text-center text-orange-500 max-md:mt-10">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/24bb21e975dcf3c3fc41fe3f8c41f867ed7d88b3551102f892899904b89bc1df?apiKey=2362306e9878458e8644eaa2dbb8fa85&"
            className="shrink-0 self-start aspect-square" 
            width={24}
            height={24}
            alt={""}
          />
          <div>WELCOME TO ONTHEPRODUCT</div>
        </div>
        <div className="mt-6 text-6xl font-medium text-center text-white leading-[89.6px] max-md:max-w-full max-md:text-4xl">
          Design that sells
        </div>
        <div className="mt-6 text-center text-zinc-400 max-w-[500px]">
          Improve your brand the affordable and easy way. Stunning designs on
          repeat, every month.{" "}
        </div>
        <div className="flex mt-12 gap-5 justify-center text-base leading-7 text-center max-w-[600px] text-neutral-200 max-md:flex-wrap">
          <Link
            href="#pricing"
            className="flex justify-center items-center px-16 py-4 border border-orange-500 border-solid bg-neutral-900 rounded-[50px] max-md:px-5"
            onClick={() => {
              setActiveSection("Pricing");
              setTimeOfLastClick(Date.now());
            }}
          >
            <div className="flex gap-3 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b70ebbb15bd04b07b7b3223cde4803b69cbc8ac2c3b1274cd6d066301b236c37?apiKey=2362306e9878458e8644eaa2dbb8fa85&"
                className="shrink-0 my-auto w-6 aspect-square"
              />
              <div>Book a call</div>
            </div>
          </Link>
          <Link
            href="#pricing"
            className="flex flex-col justify-center px-16 py-4 border border-orange-500 border-solid bg-neutral-900 rounded-[50px] max-md:px-5"
            onClick={() => {
              setActiveSection("Pricing");
              setTimeOfLastClick(Date.now());
            }}
          >
            <div className="flex gap-3 justify-center max-md:mx-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5ef092cc0263653c5f66047b58464a6871a032db24c358a4a11f6061f028383?apiKey=2362306e9878458e8644eaa2dbb8fa85&"
                className="shrink-0 my-auto w-6 aspect-square"
              />
              <div>Compare Plans</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
