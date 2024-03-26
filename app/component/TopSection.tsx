import React from "react";
import { SportsInfo } from "./SportsInfo";
import { AdInfo } from "./AdInfo";
interface BoxInfo {
  id: number;
  isAd: boolean;
  picUrl: string;
  text: string;
  events: string;
  sports: string;
  info: string;
}

const TopSection: React.FC = () => {
  const boxinfo: BoxInfo[] = [
    {
      id: 1,
      isAd: false,
      picUrl: "/box1.png",
      text: "Sacramento River Cats",
      events: "48",
      sports: "Baseball",
      info: "",
    },
    {
      id: 2,
      isAd: false,
      picUrl: "/box2.png",
      text: "Las Vegas Aviators",
      events: "28",
      sports: "Baseball",
      info: "",
    },
    {
      id: 3,
      isAd: false,
      picUrl: "/box3.png",
      text: "New Jersey Devils",
      events: "15",
      sports: "Ice Hockey",
      info: "",
    },
    {
      id: 4,
      isAd: false,
      picUrl: "/box2.png",
      text: "Las Vegas Aviators",
      events: "28",
      sports: "Baseball",
      info: "",
    },
    {
      id: 5,
      isAd: true,
      picUrl: "/ad.png",
      text: "Advertisement title",
      events: "",
      sports: "",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className=" flex justify-center flex-wrap xxs:flex-column xxs:gap-[0.5%] xs:gap-[0.5rem] s:gap-[1rem] s:content-start s:items:top sm:gap-[1rem] sm:px-4 md:flex-nowrap md:justify-evenly md:gap-[0.8%]">
      <SportsInfo boxinfo={boxinfo}></SportsInfo>
      <AdInfo boxinfo={boxinfo}></AdInfo>
    </div>
  );
};

export default TopSection;
