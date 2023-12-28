"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BeakerIcon } from '@heroicons/react/24/solid'

export default function Portfolio() {
  const { ref } = useSectionInView("Portfolio");

  return (
    <motion.section
      ref={ref}
      className="max-w-[1000px] mb-[190px]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="portfolio"
    >
      <div className="self-stretch ml-5 mt-11 max-md:max-w-full max-md:mr-1.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d309737c896c72f017c98e1ec82f245557241abf293b925ff34e7723ee31477?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d309737c896c72f017c98e1ec82f245557241abf293b925ff34e7723ee31477?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d309737c896c72f017c98e1ec82f245557241abf293b925ff34e7723ee31477?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d309737c896c72f017c98e1ec82f245557241abf293b925ff34e7723ee31477?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d309737c896c72f017c98e1ec82f245557241abf293b925ff34e7723ee31477?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d309737c896c72f017c98e1ec82f245557241abf293b925ff34e7723ee31477?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d309737c896c72f017c98e1ec82f245557241abf293b925ff34e7723ee31477?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d309737c896c72f017c98e1ec82f245557241abf293b925ff34e7723ee31477?apiKey=2362306e9878458e8644eaa2dbb8fa85&"
              className="aspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/001b2e7e55528a0da417e4543cabe524d8c80eb4180849d247d573604b168894?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/001b2e7e55528a0da417e4543cabe524d8c80eb4180849d247d573604b168894?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/001b2e7e55528a0da417e4543cabe524d8c80eb4180849d247d573604b168894?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/001b2e7e55528a0da417e4543cabe524d8c80eb4180849d247d573604b168894?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/001b2e7e55528a0da417e4543cabe524d8c80eb4180849d247d573604b168894?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/001b2e7e55528a0da417e4543cabe524d8c80eb4180849d247d573604b168894?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/001b2e7e55528a0da417e4543cabe524d8c80eb4180849d247d573604b168894?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/001b2e7e55528a0da417e4543cabe524d8c80eb4180849d247d573604b168894?apiKey=2362306e9878458e8644eaa2dbb8fa85&"
              className="aspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch ml-5 mt-14 max-md:max-w-full max-md:mr-1.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/857e28925853e694e75e66e8599cec121f8b07eedbdf55045f6012964f36059c?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/857e28925853e694e75e66e8599cec121f8b07eedbdf55045f6012964f36059c?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/857e28925853e694e75e66e8599cec121f8b07eedbdf55045f6012964f36059c?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/857e28925853e694e75e66e8599cec121f8b07eedbdf55045f6012964f36059c?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/857e28925853e694e75e66e8599cec121f8b07eedbdf55045f6012964f36059c?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/857e28925853e694e75e66e8599cec121f8b07eedbdf55045f6012964f36059c?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/857e28925853e694e75e66e8599cec121f8b07eedbdf55045f6012964f36059c?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/857e28925853e694e75e66e8599cec121f8b07eedbdf55045f6012964f36059c?apiKey=2362306e9878458e8644eaa2dbb8fa85&"
              className="aspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/266bd561952624cfa4709e36ec91c2ceee639e7e3e599adff59ac2d2864cb7b3?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/266bd561952624cfa4709e36ec91c2ceee639e7e3e599adff59ac2d2864cb7b3?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/266bd561952624cfa4709e36ec91c2ceee639e7e3e599adff59ac2d2864cb7b3?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/266bd561952624cfa4709e36ec91c2ceee639e7e3e599adff59ac2d2864cb7b3?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/266bd561952624cfa4709e36ec91c2ceee639e7e3e599adff59ac2d2864cb7b3?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/266bd561952624cfa4709e36ec91c2ceee639e7e3e599adff59ac2d2864cb7b3?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/266bd561952624cfa4709e36ec91c2ceee639e7e3e599adff59ac2d2864cb7b3?apiKey=2362306e9878458e8644eaa2dbb8fa85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/266bd561952624cfa4709e36ec91c2ceee639e7e3e599adff59ac2d2864cb7b3?apiKey=2362306e9878458e8644eaa2dbb8fa85&"
              className="aspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
