import React from "react";
import Image from "next/image";
export interface BoxInfo {
  id: number;
  picUrl: string;
  text: string;
  events: string;
  sports: string;
  info: string;
}

interface BoxProps {
  boxinfo: BoxInfo[];
}

const Box: React.FC<BoxProps> = ({ boxinfo }) => {
  return (
    <div className=" flex justify-center flex-wrap xxs:flex-column xxs:gap-[0.5%] xs:gap-[0.5rem] s:gap-[1rem] s:content-start s:items:top sm:gap-[1rem] sm:px-4 md:flex-nowrap md:justify-evenly md:gap-[0.8%]">
      {boxinfo.map((box) =>
        box.id !== 5 ? (
          <div
            className="flex-column justify-center items-center dark:bg-boxColorDark p-3 xxs:p-[0] xxs:pt-[8%] xxs:w-[70%]  xxs:h-[20%] xxs:items-start xs:items-start xs-mb-[0%] xs:w-[75%] xs:h-[20%] s:w-[45%] s:h-[33.5%] s:mb-[0%]  sm:h-[52%] sm:w-[30%] sm:px-0.5 sm:py-1 md:w-1/5 md:p-[1%] xl:p-[0.9%] 2xl:px-[1%]"
            key={box.id}
          >
            <div className="text-center">
              <img
                className="mx-auto h-full inline-block w-5/5 object-contain xxs:object-cover xxs:mx-0 xxs:w-[70%] xxs:px-0 xs:h-[75%] xs:w-[75%] s:w-[80%] sm:pt-[2%] sm:w-[90%] sm:mx-auto sm:px-[3%] xl:h-[81%] 2xl:h-[78%]  2xl:w-full"
                src={box.picUrl}
                alt={box.text}
              />
            </div>
            <div className="py-3 font-bold xxs:text-a5 xxs:py-[1.5%] xxs:mx-[15%] xs:text-a6 xs:font-medium xs:px-[14%] xs:py-[3%] s:text-a6 s:font-semibold s:pt-[2%] s:pb-[3%] s:px-[11%] sm:py-2 sm:text-a6 sm:mx-[4.5%] sm:font-medium sm:py-2 sm:pl-[4.5%] md:font-semibold md:text-a5 md:py-2 lg:text-a6 xl:text-a7 xl:pt-[4%] xl:pb-[5%] 2xl:text-a9 2xl:mx-[5%] 2xl:pt-[3%] 2xl:pb-[3.5%] 2xl:font-semibold 2xl:tracking-tighter">
              {box.text}
            </div>
            <div className="mx-auto flex bg-bglight dark:bg-bgdark  justify-evenly xxs:mx-[15%] xxs:mb-[5%] xs:mb-[4%] xs:mx-[14%] s:mx-[12%] s:pt-[0.1%] sm:pt-1 sm:mx-[6.5%] 2xl:pb-[2.5%]">
              <div className="pt-0  ">
                <div className="text-greyLight dark:text-ad xxs:text-a4 xs:text-a5 s:text-a5 sm:text-a5 md:text-a4 lg:text-a5 xl:text-a7 2xl:text-a8">
                  Total Events
                </div>
                <div className="text-sm font-medium xxs:text-a4 xs:text-a5 s:text-a6 sm:text-a5 md:text-a4 lg:text-a5 xl:text-a7 2xl:text-a8">
                  {box.events} Events
                </div>
              </div>
              <div className="pt-0">
                <div className="text-greyLight dark:text-ad xxs:text-a4 xs:text-a5 s:text-a5 sm:text-a5 md:text-a4 lg:text-a5 xl:text-a7 2xl:text-a8">
                  Sport
                </div>
                <div className="text-sm font-medium xxs:text-a4 xs:text-a5 s:text-a6 sm:text-a5 md:text-a4 lg:text-a5 xl:text-a7 2xl:text-a8">
                  {box.sports}
                </div>
              </div>
            </div>
          </div>
        ) : (
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
        )
      )}
    </div>
  );
};

export default Box;
