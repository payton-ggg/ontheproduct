import React from "react";
import { motion } from "framer-motion";

export default function OnceTitle() { 
    return (
        <motion.div
            className="max-w-[644px]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <div className="text-center text-black text-4xl font-bold monsr">
                Totally Efficient, Always Ahead
            </div>
            <div className="w-auto text-center text-gray-400 text-xl font-normal nokora mt-[23px] mb-[72px]">
                No more endless meetings! OnTheProduct has streamlined the process for efficiency. Manage your design projects seamlessly with our intuitive platform.
            </div>
        </motion.div>
    );
}

export function FirstTitle() {
    return (
        <motion.div
        className="max-w-[644px] text-center leading-8 mb-10 scroll-mt-28 max-md-950:max-w-full mt-[200px]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
        >
            <div className="w-auto text-center text-black text-4xl font-bold monsr mb-8">
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
        <motion.div>
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
        <motion.div>
            <div className="text-center text-black dark:text-white text-4xl font-bold monsr mb-3">Recent Work</div>
            <div className="text-center text-black dark:text-white text-2xl font-normal nokora">
            Recent wins with designs boosting sales.
            </div> 
        </motion.div>
    );
}