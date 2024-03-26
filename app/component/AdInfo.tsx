import React from "react";

export interface BoxInfo {
  id: number;
  isAd: boolean;
  picUrl: string;
  text: string;
  events: string;
  sports: string;
  info: string;
}

interface BoxProps {
  boxinfo: BoxInfo[];
}

export const AdInfo: React.FC<BoxProps> = ({ boxinfo }) => {
  return (
    <>
      {boxinfo.map((box) => {
        if (box.isAd) {
          return (
            <div
              className=" w-1/5 dark:bg-boxColorDark p-3 relative  xxs:w-[70%]  xxs:h-[20%] xxs:items-start xs:w-[75%] xs:h-[20%] s:w-[45%] s:h-[33.5%] sm:h-[52%] sm:w-[30%] sm:px-[2.5%] sm:py-1 md:w-1/5 md:p-[1%]  xl:p-[0.9%] 2xl:p-[0.9%]"
              key={box.id}
            >
              <div className="relative text-center xs:mx-auto xs:w-[75%] s:w-[80%] s:mx-auto sm:w-5/5 ">
                <div className="text-white bg-black top-[0%] right-[0%] flex justify-center items-center absolute right-3 p-1 xxs:w-[2.2rem] xxs:h-[1.2rem] xxs:p-[1%] xxs:text-a5 xs:text-a6 xs:w-[2.2rem] xs:h-[1.2rem] s:text-a6 s:h-[1.4rem] s:w-[2.5rem] sm:text-a5 sm:h-[17%] sm:w-[28%] sm:p-[1%] md:w-[27%] md:h-[17%] md:text-a6 lg:w-[2.5rem] lg:h-[1.4rem] xl:text-a7 1.5xl:right-[4.3%] 2xl:text-a9 2xl:w-[23%] 2xl:h-[14%]  ">
                  Ad
                </div>
                <img
                  className="object-cover w-full inline-block mx-0 sm:pt-[2%] "
                  src={box.picUrl}
                  alt={box.text}
                />
              </div>

              <div className="w-5/5 h-1/5 sm:4/5 sm:px-1 z-40  xs:mt-[8%] ">
                <div className="max-w-5/5 text-center tracking-tighter xxs:pt-[7%] xxs:text-a8 xxs:font-semibold xxs:tracking-tight xs:mb-[1%] xs:text-a9 s:text-a8 s:pt-[4%] sm:text-a8 sm:font-semibold sm:pt-2 md:font-medium md:pt-3 md:text-a6 lg:text-a8 lg:font-semibold lg:pt-4 xl:text-a9 xl:tracking-tight 2xl:text-a10">
                  {box.text}
                </div>

                <div className="font-inter text-greyLight dark:text-ad tracking-tighter text-justify xxs:text-a4 xxs:w-[80%] xxs:mx-auto xxs:leading-a5 xs:text-a5 xs:mx-[18%] s:text-a5 s:mx-[16%] sm:leading-a6 sm:text-a5 sm:h-3/5 sm:pt-1 md:leading-a5 md:text-a4 md:pt-[1.5%] md:mx-[10%] lg:leading-a6 lg:px-[5%] lg:text-a5 lg:mt-[2.5%] lg:mx-[6%] xl:text-a6 xl:leading-a7 xl:px-[8%] xl:tracking-tight  2xl:text-a8 2xl:leading-a8 ">
                  {box.info}
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
