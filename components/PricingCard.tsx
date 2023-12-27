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
      <main className="main flow">
      <div className="text-center text-black dark:text-white text-6xl font-bold monsr">Membership Plans</div>
        <div className="main__cards cards ">
          <div className="cards__inner  text-black dark:text-white">
            <div className="cards__card card  bg-white shadow-md dark:bg-white/10">
              <div className="text-3xl font-bold">Standart</div>
              <div className="text-2xl font-bold">$3.499/m</div>
              <p>One request at a time. Pause or cancel anytime.</p>
              <ul role="list" className="card__bullets flow">
                <li>One request at a time</li>
                <li>Average 36 hour delivery</li>
                <li>Unlimited brands</li>
                <li>Unlimited users</li>
                <li>Easy credit-card payments</li>
                <li>Pause or cancel anytime</li>
              </ul>
              <a href="https://buy.stripe.com/test_aEU5kMew35jtgqAbII" className="card__cta cta">Upgrade to Pro</a>
            </div>

            <div className="cards__card card bg-white shadow-md dark:bg-white/10 dark:text-white/80">
              <div className="text-3xl font-bold">Premium</div>
              <div className="text-2xl font-bold">$5.999/m</div>
              <p>One request at a time. Pause or cancel anytime.</p>
              <ul role="list" className="card__bullets flow">
                <li><b>Two</b> requests at a time</li>
                <li>Average 36 hour delivery</li>
                <li>Unlimited brands</li>
                <li>Unlimited users</li>
                <li>Easy credit-card payments</li>
                <li>Pause or cancel anytime</li>
              </ul>
              <a href="https://buy.stripe.com/test_3cseVmbjRbHR4HS5kl" className="card__cta cta">Go Ultimate</a>
            </div>
          </div>
          
          <div className="overlay cards__inner"></div>
        </div>
      </main>
    </motion.section>
  )
}

export default PricingCard