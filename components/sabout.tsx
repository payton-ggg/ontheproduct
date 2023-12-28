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
            className="mb-[72px] text-center sm:mb-40 scroll-mt-28 leading-[1px]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <motion.div
                className="max-w-[1100px] text-2xl-m"
            >
                <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
                            <div className="border bit-shadow backdrop-blur-[2.5px] bg-white bg-opacity-10 flex grow flex-col items-stretch w-full pl-10 pr-7 pt-[30px] rounded-2xl border-solid border-white max-md:max-w-full max-md:mt-3.5 max-md:px-5">
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
                        <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-3.5 text-left">
                                <div className="border bit-shadow backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-stretch px-3 py-3 rounded-2xl border-solid border-white max-md:max-w-full">
                                <div className="text-black text-2xl-m font-bold">
                                    Completely flexible
                                </div>
                                <div className="text-black text-lg mt-3.5">
                                    Not a fan of meetings? Neither are we so we've banned them
                                    altogether.
                                </div>
                                </div>{" "}
                                <div className="border bit-shadow backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-stretch mt-6 px-3 py-3 rounded-2xl border-solid border-white max-md:max-w-full">
                                <div className="text-black text-2xl-m font-bold">
                                    Organize with Trello
                                </div>{" "}
                                <div className="text-black text-lg mt-3.5">
                                    Keep your design projects in check using Trello. Easily see
                                    what's in progress, queued, or done.
                                </div>
                                </div>
                                <div className="border bit-shadow backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-stretch mt-6 px-3 py-3 rounded-2xl border-solid border-white max-md:max-w-full max-md:pr-5">
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
        <motion.section
            className="mb-32"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <div className="self-stretch ml-8 mr-9 mt-14 max-w-[1200px] max-md:mr-2.5 max-md:mt-10 max-md:max-w-full-next">
                <div className="gap-5 flex max-md:flex-col-950 max-md:items-stretch-950">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full-950 max-md-real:ml-0">
                        <div className="border backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-center pl-7 pr-8 pt-5 pb-10 rounded-2xl border-solid border-white max-md:px-5 h-[300px] max-md:h-auto shadow-lg">
                        <div className="text-black text-7xl whitespace-nowrap max-md:text-4xl">
                        <Image 
                            src={Graph}
                            alt="Diamond"
                            quality={95}
                        />
                        </div>
                        <div className="text-black text-4xl font-bold self-stretch whitespace-nowrap mt-4">
                            Design Board
                        </div>
                        <div className="text-black text-lg self-stretch mt-3.5">
                            Add as many design requests as you want to your personal board.
                        </div>
                    </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full-950 max-md-real:ml-0">
                        <div className="border backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-center pl-7 pr-8 pt-5 pb-10 rounded-2xl border-solid border-white max-md:px-5 h-[300px] max-md:h-auto shadow-lg">
                        <div className="text-black text-7xl whitespace-nowrap max-md:text-4xl">
                        <Image 
                            src={Thunder}
                            alt="Diamond"
                            quality={95}
                        />
                        </div>{" "}
                        <div className="text-black text-4xl font-bold self-stretch whitespace-nowrap mt-4">
                            Instant Delivery
                        </div>{" "}
                        <div className="text-black text-lg self-stretch mt-3.5">
                            Get your design within just a few hours\days of adding it to your board.
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full-950 max-md-real:ml-0">
                        <div className="border backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-center pl-7 pr-8 pt-5 pb-10 rounded-2xl border-solid border-white max-md:px-5 h-[300px] max-md:h-auto shadow-lg">
                        <div className="text-black text-7xl whitespace-nowrap max-md:text-4xl">
                        <Image 
                            src={Cash}
                            alt="Diamond"
                            quality={95}
                        />
                        </div>
                        <div className="text-black text-4xl font-bold self-stretch whitespace-nowrap mt-4">
                            Fixed Fee
                        </div>
                        <div className="text-black text-lg self-stretch mt-3.5">
                            There are no surprises here! Pay the same fixed amount.
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch ml-8 mr-9 mt-8 max-w-[1200px] max-md:mr-2.5 max-md:mt-10 max-md:max-w-full-next mb-[107px]">
                <div className="gap-5 flex max-md:flex-col-950 max-md:items-stretch-950">
                    <div className="flex flex-col items-stretch w-[33%] max-md:w-full-950 max-md-real:ml-0">
                        <div className="border shadow-lg backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-center pl-7 pr-8 pt-5 pb-10 rounded-2xl border-solid border-white max-md:px-5 h-[300px] max-md:h-auto">
                        <div className="text-black text-7xl whitespace-nowrap max-md:text-4xl">
                        <Image 
                            src={Pause}
                            alt="Pause"
                            quality={95}
                        />
                        </div>
                        <div className="text-black text-4xl font-bold self-stretch whitespace-nowrap mt-4">
                            Pause at any time
                        </div>
                        <div className="text-black text-lg self-stretch mt-3.5">
                            Pause your subscription when you don't need the design and resume when you do.
                        </div>
                    </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full-950 max-md-real:ml-0">
                        <div className="border shadow-lg backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-center pl-7 pr-8 pt-5 pb-10 rounded-2xl border-solid border-white max-md:px-5 h-[300px] max-md:h-auto">
                        <div className="text-black text-7xl whitespace-nowrap max-md:text-4xl">
                        <Image 
                            src={Diamond}
                            alt="Diamond"
                            quality={95}
                        />
                        </div>{" "}
                        <div className="text-black text-4xl font-bold self-stretch whitespace-nowrap mt-4">
                            Uniqueness
                        </div>{" "}
                        <div className="text-black text-lg self-stretch mt-3.5">
                            Get the highest quality design, developed clearly according to your requirement.
                        </div>
                    </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full-950 max-md-real:ml-0">
                        <div className="border shadow-lg backdrop-blur-[2.5px] bg-white bg-opacity-10 flex flex-col items-center pl-7 pr-8 pt-5 pb-10 rounded-2xl border-solid border-white max-md:px-5 h-[300px] max-md:h-auto">
                        <div className="text-black text-7xl whitespace-nowrap max-md:text-4xl">
                        <Image 
                            src={Drop}
                            alt="Diamond"
                            quality={95}
                        />
                        </div>
                        <div className="text-black text-4xl font-bold self-stretch whitespace-nowrap mt-4">
                            Flexible plan
                        </div>
                        <div className="text-black text-lg self-stretch mt-3.5">
                            Scale your plan to suit your needs, and pause anytime.
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}