import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "@/app/image.css";

import { EffectCube, Pagination } from "swiper/modules";

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
  return <></>;
}
