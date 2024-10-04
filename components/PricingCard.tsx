"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PayButton from "./PayButton";

const PricingCard: React.FC = () => {
  const { ref } = useSectionInView("Pricing");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section ref={ref} id="pricing">
      <div className="flex flex-col max-w-[864px]">
        <div className="flex flex-wrap gap-10 items-start">
          <div className="flex overflow-hidden flex-col justify-center p-8 border border-solid bg-neutral-900 border-amber-800 border-opacity-0 min-w-[240px] rounded-[50px] w-[412px] max-md:px-5">
            <div className="flex flex-col justify-center px-4 w-full">
              <div className="flex flex-col justify-center items-start w-full">
                <div className="flex flex-col justify-center">
                  <div className="gap-2 self-start text-3xl font-semibold leading-snug text-center whitespace-nowrap text-neutral-200">
                    Standart
                  </div>
                  <div className="text-base leading-7 text-zinc-400">
                    One request at the time
                  </div>
                </div>
                <div className="flex flex-col justify-center mt-2.5">
                  <div className="text-3xl font-semibold leading-snug bg-clip-text text-orange-500">
                    3500$/m
                  </div>
                  <div className="text-base leading-7 text-zinc-400">
                    Pause or Cancel anytime
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-2.5 w-full text-base leading-7 text-center">
                <div className="flex flex-col justify-center w-full text-neutral-200">
                  <a href="/checkout.html">
                    <div className="overflow-hidden gap-3 self-stretch px-6 py-3 w-full border border-orange-500 border-solid bg-neutral-900 rounded-[50px] max-md:px-5">
                      Buy it with paypal
                    </div>
                  </a>
                  <a href="https://t.me/ontheproduct">
                    <div className="overflow-hidden gap-3 self-stretch px-6 py-3 mt-4 w-full border border-solid bg-neutral-900 border-neutral-800 rounded-[50px] max-md:px-5">
                      Buy it in crypto
                    </div>
                  </a>
                </div>
                <div className="self-center mt-2 bg-clip-text text-orange-500">
                  Book a call
                </div>
              </div>
              <div className="mt-2.5 text-base leading-7 text-neutral-200">
                <span className="text-lg font-medium leading-8">
                  What's included:
                </span>
                <ul>
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
          <div className="flex overflow-hidden flex-col justify-center p-8 border border-solid bg-neutral-900 border-neutral-800 min-w-[240px] rounded-[50px] w-[412px] max-md:px-5">
            <div className="flex flex-col justify-center px-4 w-full">
              <div className="flex flex-col justify-center items-start w-full">
                <div className="flex flex-col justify-center">
                  <div className="gap-2 self-start text-3xl font-semibold leading-snug text-center whitespace-nowrap text-neutral-200">
                    Premium
                  </div>
                  <div className="text-base leading-7 text-zinc-400">
                    Two requests at the time
                  </div>
                </div>
                <div className="flex flex-col justify-center mt-2.5">
                  <div className="text-3xl font-semibold leading-snug bg-clip-text text-orange-500">
                    4999$/m
                  </div>
                  <div className="text-base leading-7 text-zinc-400">
                    Pause or Cancel anytime
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center mt-2.5 w-full text-base leading-7 text-center">
                <div className="flex flex-col justify-center w-full text-neutral-200">
                  <a href="/checkout.html">
                    <div className="overflow-hidden gap-3 self-stretch px-6 py-3 w-full border border-orange-500 border-solid bg-neutral-900 rounded-[50px] max-md:px-5">
                      Buy it with paypal
                    </div>
                  </a>
                  <a href="https://t.me/ontheproduct">
                    <div className="overflow-hidden gap-3 self-stretch px-6 py-3 mt-4 w-full border border-solid bg-neutral-900 border-neutral-800 rounded-[50px] max-md:px-5">
                      Buy it in crypto
                    </div>
                  </a>
                </div>
                <div className="self-center mt-2 bg-clip-text text-orange-500">
                  Book a call
                </div>
              </div>
              <div className="mt-2.5 text-base leading-7 text-neutral-200">
                <span className="text-lg font-medium leading-8">
                  What's included:
                </span>
                <ul>
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
    </motion.section>
  );
};

export default PricingCard;
