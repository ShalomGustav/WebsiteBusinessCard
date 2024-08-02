"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "../constants";
import Image from "next/image";

const ServiceSlider = () => {
  return (
    <div className="absolute bottom-0 right-20 md:bottom-40 md:right-30 w-[60%] md:w-[88%]">
      <Swiper
        breakpoints={{
          120: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            
            <a
              href={item.backgroundImage}  
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md cursor-pointer flex flex-col gap-6 mb-10 group relative text-white shadow-lg rounded-xl px-6 py-8 h-[300px] w-[250px] overflow-hidden"
            >
              
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.overlayImage})` }}
              />
              
              <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-500 to-violet-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-800 group-hover:text-blue-400 w-[30px] h-[30px]" />
                <h1 className="text-gray-300 text-[10px] lg:text-2xl font-bold">{item.title}</h1>
                <p className="lg:text-[14px] text-gray-300">{item.content}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
