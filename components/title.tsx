"use client"

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
        <motion.div
            className="max-w-[644px]"
            data-aos="fade-up"
        >
            <div className="text-center text-black text-4xl font-bold monsr">
                Totally Efficient, Always Ahead
            </div>
            <div className="w-auto text-center text-gray-400 text-xl font-normal nokora mt-[23px] mb-[10px]">
                No more endless meetings! OnTheProduct has streamlined the process for efficiency. Manage your design projects seamlessly with our intuitive platform.
            </div>
        </motion.div>
    );
}

export function FirstTitle() {
    return (
        <motion.div
        className="max-w-[644px] text-center leading-8 mb-10 scroll-mt-28 max-md-950:max-w-full mt-[200px]"
        id="about"
        data-aos="fade-up"
        >
            <div className="w-auto text-center text-black text-4xl font-bold monsr mb-8" >
            Transforming How Your Products Look
            </div>
            <div className="w-auto text-center text-gray-400 text-xl font-normal nokora">
            <p>Say goodbye to old-fashioned design. Step into a fresh era of custom made designs that lift your product appearance to new heights.</p>
            </div>
        </motion.div>
    );
}

export function TwiceTitle() {
    return (
        <motion.div
           data-aos="fade-up"
        >
            <div className="text-black text-center text-4xl font-bold self-center mt-28 max-md:max-w-full max-md:mt-10">
                Your membership perks
            </div>
            <div className="text-gray-400 text-center text-2xl self-center max-w-[644px] mt-5 max-md:max-w-full mb-[28px]">
                Great benefits that make us your one-stop for design needs. Really.
            </div>
        </motion.div>
    );
}

export function ThirdTitle() {
    return (
        <motion.div
            data-aos="zoom-out"
        >
            <div className="text-center text-black text-4xl font-bold monsr mb-3">
                Recent Work
            </div>
            <div className="text-center text-black text-2xl font-normal nokora">
            Recent wins with designs boosting sales.
            </div> 
        </motion.div>
    );
}