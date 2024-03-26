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
import React from "react";

export const SportsInfo: React.FC<BoxProps> = ({ boxinfo }) => {
  return (
    <>
      {boxinfo.map((box) => {
        if (!box.isAd) {
          return (
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
          );
        }
      })}
    </>
  );
};
