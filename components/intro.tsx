"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return ( 
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[814px] text-center sm:mb-0 scroll-mt-[100rem] leading-normal"
    >
      {/* <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://res.cloudinary.com/platon1gg/image/upload/v1702576130/ytljh4mc68yfk0x4ghyh.png"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div> */}

      {/* <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Your trusted {" "}<span className="font-bold">Design </span>
        partner. Access {" "}
        <span className="font-bold">talented creatives</span> whenever you need with 
        <span className="italic">design </span>as a {" "}
        <span className="underline">subscription</span>.
      </motion.h1> */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="text-center mb-4">
          <span className="text-black text-5xl font-bold">Designs that </span><span className="text-blue-600 text-5xl font-bold ">Sell</span><span className="text-black text-5xl font-bold ">, Not Just Show</span>
        </div>
        <div className="max-w-[707px] w-auto text-center text-gray-400 text-2xl font-normal nokora mb-10">Stunning designs on repeat, every month. Improve your brand the affordable and easy way.</div>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#pricing"
          className="w-60 h-14 bg-blue-600 rounded-2xl px-7 py-3 focus:scale-110 hover:scale-110 hover:bg-purple-600 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Pricing");
            setTimeOfLastClick(Date.now());
          }}
        >
          <div className="text-center text-white text-xl font-bold ">Compare Plans</div>{" "}
        </Link>


      </motion.div>
    </section>
  );
}
