"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ontheproduct from "@/public/images/ontheproduct.png";
import Image from "next/image";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative max-md-770:disp-none">
      <motion.div
        className="shadow-lg fixed top-0 left-1/2 h-[5.5rem] w-auto rounded-none border-opacity-40 bg-[#121214] bg-opacity-80 shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[4rem] sm:w-[55rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-[200px] -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 w-auto">
        <ul className="flex flex-wrap items-center justify-center gap-y-4 text-[0.9rem] font-medium text-white sm:w-[auto] sm:flex-nowrap sm:gap-11 w-auto mt-1">
          <Image src={ontheproduct} alt={"o"} width={45} className="mr-5" />
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-orange-950 transition",
                  {
                    "text-gray-950 ": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
          {/* <div className="justify-center text-base leading-7 text-center border border-orange-500 border-solid bg-neutral-900 rounded-[50px] text-neutral-200 max-w-10">
            <img 
              src="http://res.cloudinary.com/platon1gg/image/upload/v1718455780/qmllrwiknoin8dhwrs1n.png"
              width={500}
              alt="Book a Call"
            />
          </div> */}
        </ul>
      </nav>
    </header>
  );
}
