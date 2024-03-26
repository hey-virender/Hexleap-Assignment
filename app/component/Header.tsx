import React from "react";
import { useTheme } from "next-themes";
import ToggleTheme from "./ToggleTheme";

function Header() {
  return (
    <div className="font-poppins pl-[5.5%] mt-[6%] md:pl-[0.5%] relative">
      <p
        className="border-regal border-b-2 w-[6%] max-w-max font-bold xxs:text-center xxs:ml-[10%] xxs:text-2xl xxs:w-[30%] xxs:mb-[8%] xs:text-2xl xs:ml-[16%] xs:w-[25.5%]
      s:text-3xl s:w-[22.5%] sm:text-xl sm:w-[12%] sm:ml-[2%] md:text-xl md:w-[10%] ] lg:text-2xl lg:w-[9%] xl:w-[7.5%] 2xl:text-5xl 2xl:border-b-8 2xl:w-[11.9%] "
      >
        Sports
      </p>
      <ToggleTheme></ToggleTheme>
    </div>
  );
}

export default Header;
