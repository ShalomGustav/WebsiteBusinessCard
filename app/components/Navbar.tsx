import { Socials } from "../constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-10 left-0 right-2 bg-transparent z-[20] flex items-start justify-between md:px-60 p-5">

      <h1 className="absolute left-6 top-[-10px] text-white text-[11px] md:text-[28px] lg:text-[40px] xl:text-[45px] whitespace-nowrap overflow-hidden text-ellipsis">
        Фатихов <span className="font-thin">Максим</span>
        <span className="text-red-500"> Сергеевич</span>
      </h1>
      <div className="absolute right-5 top-0 transform -translate-y-1/2 flex flex-row gap-3">
        {Socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
          >
            <Image
              src={social.src}
              alt={social.name}
              width={20}
              height={20}
              className="w-full h-full"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
