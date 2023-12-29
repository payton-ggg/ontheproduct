import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Faqs() {
  const { ref } = useSectionInView("Faqs");

  return (
    <motion.div
      ref={ref}
      className="mb-10 text-center leading-8 sm:mb-10 scroll-mt-[4rem]"
      id="faqs"
    >
      <div className="container">
    
      <div className="text-black text-center text-6xl font-bold self-center whitespace-nowrap max-md:text-4xl max-md:mt-10 mb-16">
        FAQs
      </div>
        
        <div className="faq-drawer bg-white bg-opacity-20 rounded-2xl shadow-lg border border-white pb-7" data-aos="fade-up"
        data-aos-duration="1000">
          <input className="faq-drawer__trigger" id="faq-drawer" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer">Why would I use your services when I can just hire a full-time designer? </label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              That's an interesting question! However, let's start with the fact that it will cost you $9,000+ per month to find an experienced senior level designer, which is over $100,000 per year. The problem is that even if you do find such a designer, they can't be fully employed and you'll be obligated to pay them while they're idle.
              </p>
            </div>
          </div>
        </div>
        
        <div className="faq-drawer bg-white bg-opacity-20 rounded-2xl shadow-lg border border-white pb-7" data-aos="fade-up"
     data-aos-duration="1000">
          <input className="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-2">How do I make a design request?</label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              OnTheProduct offers tons of flexibility when requesting designs using Trello. Some common ways clients request designs are directly through Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to record their briefs). Basically, if it can be linked to Trello or shared in Trello.
              </p>
            </div>
          </div>
        </div>
        
        <div className="faq-drawer bg-white bg-opacity-20 rounded-2xl shadow-lg border border-white pb-7" data-aos="fade-up"
     data-aos-duration="1000">
          <input className="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-3">Is there a limit to the number of requests I can receive?</label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              No. There is no limit at all. Just add as many requests to the board as you need and you will get designs one by one.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer bg-white bg-opacity-20 rounded-2xl shadow-lg border border-white pb-7" data-aos="fade-up"
     data-aos-duration="1000">
          <input className="faq-drawer__trigger" id="faq-drawer-4" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-4">How quickly will I receive my designs?</label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              On average, most requests are completed in just 24 hours. However, more complex requests may take longer.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer bg-white bg-opacity-20 rounded-2xl shadow-lg border border-white pb-7" data-aos="fade-up"
     data-aos-duration="1000">
          <input className="faq-drawer__trigger" id="faq-drawer-5" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-5">How does the pause feature work?</label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              We are well aware that you may not have enough design work for a whole month. You may only have one or two design requests at the moment. That's where pausing your subscription comes in handy.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer bg-white bg-opacity-20 rounded-2xl shadow-lg border border-white pb-7" data-aos="fade-up"
     data-aos-duration="1000">
          <input className="faq-drawer__trigger" id="faq-drawer-6" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-6">I only have one request, does it make sense for me to purchase a subscription??</label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              There definitely is! You can pause your subscription after your request is complete and come back when you have additional design needs. You will not lose the remainder of your subscription.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer bg-white bg-opacity-20 rounded-2xl shadow-lg border border-white pb-7" data-aos="fade-up"
     data-aos-duration="1000">
          <input className="faq-drawer__trigger" id="faq-drawer-7" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-7">What if I don't like the design?</label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              Don't worry, we will continue to refine the design until you are 100% satisfied.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer bg-white bg-opacity-20 rounded-2xl shadow-lg border border-white pb-7" data-aos="fade-up"
     data-aos-duration="1000">
          <input className="faq-drawer__trigger" id="faq-drawer-8" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-8">Can I get a refund if I don't like your services?</label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              There are no refunds due to the high quality of the design.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer bg-white bg-opacity-20 rounded-2xl shadow-lg border border-white pb-7" data-aos="fade-up"
     data-aos-duration="1000">
          <input className="faq-drawer__trigger" id="faq-drawer-9" type="checkbox" /><label className="faq-drawer__title" htmlFor="faq-drawer-9">What programs do you do the design in?</label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              Most requests are designed using Figma, Photoshop, Blender, and Cinema 4D.            
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}