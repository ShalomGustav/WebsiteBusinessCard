"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ProImages, ProImages2 } from "../constants";
import Image from "next/image";
import { CgExport } from "react-icons/cg"; // Пример иконки

const ProjectSlider = () => {
  return (
    <div className="w-[50%] md:w-[33%]">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className="mb-5">
          <div className="grid grid-cols-2 gap-3 md:gap-1 md:px-2">
            {ProImages.map((item) => (
              <SwiperSlide key={item.src}>
                <a
                  href={item.src}  // Ссылка на изображение
                  target="_blank"   // Открывается в новом окне
                  rel="noopener noreferrer" // Для безопасности
                  className="block rounded-md cursor-pointer relative group w-[80px] h-[80px] md:w-[230px] md:h-[230px] overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt="project image"
                    width={180}
                    height={180}
                    className="rounded-md h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.overlayImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-500 to-violet-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white md:text-lg">
                  Смотреть проект
                    <Image
                      src="/assets/icons/arrow-right.svg"
                      alt="arrow right"
                      width={20}
                      height={20}
                      className="invert brightness-0 ml-2"
                    />
                  </div>
                  <div className="absolute inset-0 flex left-4 top-4">
                    <div className="relative flex flex-col gap-3">
                      <CgExport className="text-violet-300 group-hover:text-blue-400 w-[30px] h-[30px]" />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </div>
        </SwiperSlide>

        <SwiperSlide className="mb-5">
          <div className="grid grid-cols-2 gap-3 md:px-6">
            {ProImages2.map((item) => (
              <SwiperSlide key={item.src}>
                <a
                  href={item.src}  // Ссылка на изображение
                  target="_blank"   // Открывается в новом окне
                  rel="noopener noreferrer" // Для безопасности
                  className="block rounded-md cursor-pointer relative group w-[80px] h-[80px] md:w-[230px] md:h-[230px] overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt="project image"
                    width={180}
                    height={180}
                    className="rounded-md w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.overlayImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-500 to-violet-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white md:text-lg">
                    Смотреть проект
                    <Image
                      src="/assets/icons/arrow-right.svg"
                      alt="arrow right"
                      width={20}
                      height={20}
                      className="invert brightness-0 ml-2"
                    />
                  </div>
                  <div className="absolute inset-0 flex left-4 top-4">
                    <div className="relative flex flex-col gap-3">
                      <CgExport className="text-violet-300 group-hover:text-blue-400 w-[30px] h-[30px]" />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
