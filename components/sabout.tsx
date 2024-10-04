import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Graph from "@/public/graph.svg"
import Thunder from "@/public/thunder.svg"
import Cash from "@/public/cash.svg"
import Pause from "@/public/pause.svg"
import Diamond from "@/public/diamond.svg"
import Drop from "@/public/water.svg"

export default function SAbout() { 
    return (
        <motion.section
            className="mb-[72px] text-center sm:mb-32 scroll-mt-14 leading-[1px] text-white"
        >
            <motion.div
                className="max-w-[1100px] text-2xl-m"
            >
                <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10 mx-2">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0" data-aos="fade-down">
                            <div className="border bit-shadow backdrop-blur-[2.5px] bg-white bg-opacity-10 flex grow flex-col items-stretch w-full pl-10 pr-7 pt-[85px] rounded-2xl border-solid border-white max-md:max-w-full max-md:mt-3.5 max-md:px-5 max-md:pt-5">
                                <div className="text-2xl-m font-bold max-md:max-w-full text-left">
                                    <span className="text-black">
                                        “Without needing detailed briefs, <span className="text-blue-600">OnTheProduct</span> delivered
                                        top-notch results, demonstrating remarkable self-direction and
                                        initiative. Design team was a breeze to communicate with, always
                                        open to a wide range of tasks, which made the process highly
                                        efficient. “
                                    </span>
                                </div>
                                <div className="text-right text-2xl-m font-bold bg-clip-text w-[247px] max-w-full mr-6 mt-14 mb-6 self-end max-md:mr-2.5 max-md:mt-10 text-sky-500">
                                    Vera Semenova - Project Manager at Intimate AI
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0" data-aos="fade-down">
                            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-3.5 text-left">
                                <div className="border bit-shadow backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-stretch px-5 py-5 rounded-2xl border-solid border-white max-md:max-w-full">
                                    <div className="text-black text-2xl-m font-bold">
                                        Completely flexible
                                    </div>
                                    <div className="text-black text-lg mt-3.5">
                                        Not a fan of meetings? Neither are we so we've banned them
                                        altogether.
                                    </div>
                                </div>{" "}
                                <div className="border bit-shadow backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-stretch mt-6 px-5 py-5 rounded-2xl border-solid border-white max-md:max-w-full">
                                    <div className="text-black text-2xl-m font-bold">
                                        Organize with Trello
                                    </div>{" "}
                                    <div className="text-black text-lg mt-3.5">
                                        Keep your design projects in check using Trello. Easily see
                                        what's in progress, queued, or done.
                                    </div>
                                </div>
                                <div className="border bit-shadow backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-stretch mt-6 px-5 py-5 rounded-2xl border-solid border-white max-md:max-w-full max-md:pr-5">
                                    <div className="text-black text-2xl-m font-bold">
                                        Bring on the whole team
                                    </div>
                                    <div className="text-black text-lg mt-3.5">
                                        Not a fan of meetings? Neither are we so we've banned them
                                        altogether.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
}

export function TAbout() {
    return (
        <motion.section>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                        <defs>
                            <pattern
                            id="d9d7687a-355f-4502-8ec4-7945db034688"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                            >
                            <circle cx="1" cy="1" r=".7" />
                            </pattern>
                        </defs>
                        <rect
                            fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                            width="52"
                            height="24"
                        />
                        </svg>
                        <span className="relative">Your</span>
                    </span>{' '}
                    membership perks
                    </h2>
                    <p className="text-sm text-white md:text-lg">
                    Great benefits that make us your one-stop for design needs. Really.
                    </p>
                </div>
                <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3 s-700:w-100">
                    <div className="p-5 duration-300 transform bg-kinda-black border rounded shadow-sm hover:-translate-y-2 border-grey-500 text-white">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full">
                            <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                            >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Design Board</h6>
                        <p className="text-sm text-white">
                            Add as many design requests as you want to your personal board.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-kinda-black border rounded shadow-sm hover:-translate-y-2 border-grey-500 text-white">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full">
                            <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                            >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Instant Delivery</h6>
                        <p className="text-sm text-white">
                            Get your design within just a few hours\days of adding it to your board.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-kinda-black border rounded shadow-sm hover:-translate-y-2 border-grey-500 text-white">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full">
                            <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                            >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Fixed Fee</h6>
                        <p className="text-sm text-white">
                            There are no surprises here! Pay the same fixed amount.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-kinda-black border rounded shadow-sm hover:-translate-y-2 border-grey-500 text-white">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full">
                            <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                            >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Pause at any time</h6>
                        <p className="text-sm text-white">
                        Pause your subscription when you don't need the design and resume when you do.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-kinda-black border rounded shadow-sm hover:-translate-y-2 border-grey-500 text-white">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full">
                            <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                            >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Uniqueness</h6>
                        <p className="text-sm text-white">
                            Get the highest quality design, developed clearly according to your requirement.
                        </p>
                    </div>
                    <div className="p-5 duration-300 transform bg-kinda-black border rounded shadow-sm hover:-translate-y-2 border-grey-500 text-white">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full">
                            <svg
                            className="w-10 h-10 text-white"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                            >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Flexible plan</h6>
                        <p className="text-sm text-white">
                            Scale your plan to suit your needs, and pause anytime.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}