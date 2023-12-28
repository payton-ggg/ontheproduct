"use client";
import React from 'react'
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from '@/context/active-section-context';

const PricingCard = () => {
  const { ref } = useSectionInView("Pricing");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
      <motion.section
        ref={ref}
        className="section-card scroll-mt-[1rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="pricing"
      >
      <div className="self-stretch mt-20 mx-7 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <div className="border shadow-lg backdrop-blur-[2.5px] bg-white bg-opacity-10 flex grow flex-col w-full px-8 py-8 rounded-2xl border-solid border-white max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="text-black text-3xl self-stretch">
                <span className="font-bold text-4xl">Standard</span>
              </div>
              <div className="text-black text-3xl self-stretch">
                <span className="text-lg text-gray-400">
                  One request at a time. Pause or cancel <br /> anytime.
                </span>
              </div>
              <div className="text-black text-4xl font-bold self-stretch mt-7">
                3499$/m
              </div>
              <div className="text-gray-400 text-lg self-stretch mt-2">
                Pause or Cancel anytime
              </div>
              <a href="https://buy.stripe.com/test_aEU5kMew35jtgqAbII">
                <div className="text-white text-center text-xl font-bold bg-black self-stretch justify-center items-center mt-6 px-16 py-7 rounded-2xl max-md:px-5">
                  Try it
                </div>
              </a>
              <div className="text-black text-lg self-center whitespace-nowrap mt-3">
                Book a Call
              </div>
              <div className="text-black text-xl self-stretch mt-5 mb-3.5">
                <div>
                  <span className="text-black text-lg font-bold">
                    What's included:<br/>
                  </span>
                  <ul className="text-black text-lg font-normal list-disc ml-5">
                      <li>One request at a time</li>
                      <li>Average 36 hour delivery</li>
                      <li>Unlimited brands</li>
                      <li>Unlimited users</li>
                      <li>Easy credit-card payments</li>
                      <li>Pause or cancel anytime</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
            <div className="border shadow-lg backdrop-blur-[2.5px] bg-white bg-opacity-10 flex grow flex-col items-stretch w-full py-8 rounded-2xl border-solid border-white max-md:max-w-full max-md:mt-10">
              <div className="flex flex-col pl-9 pr-12 max-md:max-w-full max-md:px-5">
                <div className="text-black text-3xl self-stretch">
                  <span className="font-bold text-4xl">Premium</span>
                </div>
                <div className="text-black text-3xl self-stretch">
                  <span className="text-lg text-gray-400">
                    One request at a time. Pause or cancel anytime.
                  </span>
                </div>
                <div className="text-black text-4xl font-bold self-stretch mt-7">
                  5999$/m
                </div>
                <div className="text-gray-400 text-lg self-stretch mt-2">
                  Pause or Cancel anytime
                </div>
                <a href="https://buy.stripe.com/test_3cseVmbjRbHR4HS5kl">
                  <div className="text-white text-center text-xl font-bold bg-black self-stretch justify-center items-center mt-6 px-16 py-7 rounded-2xl max-md:px-5">
                    Try it
                  </div>
                </a>
                <div className="text-black text-lg self-center whitespace-nowrap mt-3">
                  Book a Call
                </div>
              </div>
              <div className="text-black text-xl self-stretch mt-5 mb-3.5 ml-8">
                <div>
                  <span className="text-black text-lg font-bold">
                    What's included:<br/>
                  </span>
                  <ul className="text-black text-lg font-normal list-disc pl-5">
                      <li>One request at a time</li>
                      <li>Average 36 hour delivery</li>
                      <li>Unlimited brands</li>
                      <li>Unlimited users</li>
                      <li>Easy credit-card payments</li>
                      <li>Pause or cancel anytime</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default PricingCard