"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="text-center leading-8 sm:mb-2 scroll-mt-28 mx-10"
      id="about"
    >
      <div className="flex overflow-hidden flex-col">
        <div className="flex flex-col justify-center items-center px-20 py-16 w-full bg-[linear-gradient(180deg,rgba(153,77,22,0.00_32.24%,rgba(255,129,37,0.15)_115.55%))] rounded-[50px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center w-full max-w-[1000px] max-md:max-w-full">
            <div className="flex flex-col justify-center items-center max-w-full text-center w-[789px]">
              <div className="text-5xl font-medium leading-snug text-white max-md:max-w-full max-md:text-4xl">
                Totally Efficient, Always Ahead
              </div>
              <div className="mt-5 text-base leading-7 text-zinc-400 w-[487px] max-md:max-w-full">
                No more endless meetings! OnTheProduct has streamlined the
                process for efficiency. Manage your design projects seamlessly
                with our intuitive platform.
              </div>
            </div>
            <div className="flex flex-wrap gap-7 justify-between items-start mt-12 w-full max-md:mt-10">
              <div className="flex overflow-hidden flex-col px-8 pt-8 pb-16 border border-solid bg-neutral-900 border-neutral-800 min-h-[244px] min-w-[240px] rounded-[50px] w-[314px] max-md:px-5">
                <div className="flex gap-2 justify-center items-start self-start text-sm tracking-widest leading-6 text-center text-orange-500">
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8110d4a6d61baecd445328faa07c5e89f61203b588085d9a879b2a3cb772265e?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85"
                    className="object-contain shrink-0 w-6 aspect-square"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div>Completely flexible</div>
                </div>
                <div className="mt-2.5 text-base leading-7 text-zinc-400 text-left">
                  Not a fan of meetings? Neither are we so we've banned them
                  altogether.
                </div>
              </div>
              <div className="flex overflow-hidden flex-col p-8 border border-solid bg-neutral-900 border-neutral-800 min-h-[244px] min-w-[240px] rounded-[50px] w-[314px] max-md:px-5">
                <div className="flex gap-2 justify-center items-start self-start text-sm tracking-widest leading-6 text-center text-orange-500">
                  <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8110d4a6d61baecd445328faa07c5e89f61203b588085d9a879b2a3cb772265e?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85"
                    className="object-contain shrink-0 w-6 aspect-square"
                    alt=""
                    width={100}
                    height={100}
                  />
                  <div>Organize with Trello</div>
                </div>
                <div className="mt-2.5 text-base leading-7 text-zinc-400 text-left text-left">
                  Keep your design projects in check using Trello. Easily see
                  what's in progress, queued, or done.
                </div>
              </div>
              <div className="flex overflow-hidden flex-col px-8 pt-8 pb-16 border border-solid bg-neutral-900 border-neutral-800 min-h-[244px] min-w-[240px] rounded-[50px] w-[314px] max-md:px-5">
                <div className="flex gap-2 justify-center items-start self-start text-sm tracking-widest leading-6 text-center text-orange-500">
                  <Image
                    loading="lazy"
                    alt=""
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8110d4a6d61baecd445328faa07c5e89f61203b588085d9a879b2a3cb772265e?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85"
                    className="object-contain shrink-0 w-6 aspect-square"
                    width={100}
                    height={100}
                  />
                  <div>Bring on the whole team</div>
                </div>
                <div className="mt-2.5 text-base leading-7 text-zinc-400 text-left">
                  Not a fan of meetings? Neither are we so we've banned them
                  altogether.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function LogoExample() {
  return (
    <motion.div className="mx-0" data-aos="fade-up">
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
