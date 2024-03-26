"use client";
import React from "react";

function ShowMoreBtn() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex justify-center items-center text-center ] xxs:mt-[15%] xxs:mb-[15%] xs:mt-[15%] s:mt-[15%] sm:mt-[15%]">
      <button
        className="text-white font-bold mx-auto bg-blue w-[11%] h-[13%] mt-4 rounded xxs:text-a5 xxs:w-[20%] xxs:py-[3%] xs:text-a5 xs:w-[20%] xs:py-[3%] s:text-a6 s:w-[17%] s:py-[1.6%] sm:w-[9%] sm:text-a5 sm:h-7 md:w-[12%] md:h-8 md:text-a6 md:mt-[10%] md:mb-[4%] lg:text-a7 lg:w-[10%] lg:h-9 xl:mt-[7%] xl:text-a8 2xl:text-a9 2xl:w-[12%] 2xl:h-12"
        onClick={scrollToBottom}
      >
        See More
      </button>
    </div>
  );
}

export default ShowMoreBtn;
