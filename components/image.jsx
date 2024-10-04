/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "@/app/image.css";
import { motion } from "framer-motion";

import { Pagination } from "swiper/modules";
import { useSectionInView } from "@/lib/hooks";

export default function ImageS() {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="body-card mySwiper flex justify-center items-center px-16 py-12 border border-solid border-neutral-800 rounded-[50px] bg-neutral-900 max-md:px-5 max-md:max-w-full"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center p-8 text-center text-zinc-400 max-md:px-5">
            <div className="flex flex-col gap-1 justify-center mt-5 max-w-full text-base font-semibold leading-7 text-orange-500 w-[184px]">
              <div>Nouman Katawazi</div>
            </div>
            <div className="text-sm font-light leading-6">
              Founder Aina Labs
            </div>
            <div className="self-stretch mt-6 mb-10 text-lg font-medium leading-8 max-md:max-w-full">
              “We highly endorse OnTheProduct for exceptional graphic design
              services. Their team has consistently impressed us with their
              creative flair, meticulous attention to detail, and unwavering
              commitment to embodying our brand's vision.”
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export function PortfolioCub() {
  const { ref } = useSectionInView("Portfolio");
  return (
    <>
      <motion.div className="mt-20" ref={ref} id="portfolio">
        <div className="flex gap-5 max-md:flex-col max-w-[1000px]">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center items-start self-stretch my-auto w-full max-md:mt-10">
              <div className="flex flex-col max-w-full w-[351px]">
                <div className="flex flex-col justify-center">
                  <div className="text-5xl font-medium leading-snug text-white max-md:text-4xl">
                    Recent Work
                  </div>
                  <div className="mt-6 text-base leading-7 text-zinc-400">
                    Check out the recent design projects we've done. These are
                    successful jobs that have increased sales to clients.
                  </div>
                </div>
              </div>
              <a href="https://www.figma.com/proto/42b63myLbWYz1qm8PWB7LH/OnTheProduct-%7C-Sample-work?type=design&node-id=0-1&t=HWJGSdiPHfNvyxZ5-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2">
                <div className="flex overflow-hidden gap-3 justify-center items-center px-6 py-3 mt-5 text-base leading-7 text-center border border-orange-500 border-solid bg-neutral-900 rounded-[50px] text-neutral-200 max-md:px-5 max-md:mt-10">
                  <div className="flex gap-3 justify-center items-center self-stretch my-auto">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1cac0f1fec05f3094d9c5870fad15f4861872c80387cdcfee128512aad38669?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">Learn More</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/29d1cade90c9945cefaf3e64c8dfaba0e41f00ec67bfeec242710eebb67ab02c?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d1cade90c9945cefaf3e64c8dfaba0e41f00ec67bfeec242710eebb67ab02c?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d1cade90c9945cefaf3e64c8dfaba0e41f00ec67bfeec242710eebb67ab02c?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d1cade90c9945cefaf3e64c8dfaba0e41f00ec67bfeec242710eebb67ab02c?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d1cade90c9945cefaf3e64c8dfaba0e41f00ec67bfeec242710eebb67ab02c?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d1cade90c9945cefaf3e64c8dfaba0e41f00ec67bfeec242710eebb67ab02c?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d1cade90c9945cefaf3e64c8dfaba0e41f00ec67bfeec242710eebb67ab02c?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/29d1cade90c9945cefaf3e64c8dfaba0e41f00ec67bfeec242710eebb67ab02c?placeholderIfAbsent=true&apiKey=2362306e9878458e8644eaa2dbb8fa85"
              className="object-contain grow w-full aspect-[1.03] max-md:mt-8 max-md:max-w-full"
            />
          </div>
        </div>
      </motion.div>{" "}
      <style>{`builder-component { max-width: none !important; }`}</style>{" "}
    </>
  );
}
