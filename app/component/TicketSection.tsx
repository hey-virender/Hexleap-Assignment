import React from "react";
import Ticket from "./Ticket";
import { useRef } from "react";
interface TicketInfo {
  id: number;
  picUrl: string;
  head: string;
  date: string[];
  location: string[];
  button: string;
}

const TicketSection: React.FC = () => {
  const ticketinfo: TicketInfo[] = [
    {
      id: 1,
      picUrl: "/ticket1.png",
      head: "Las Vegas Aviators",
      date: ["OCT 15", "SUN", "4:30 PM"],
      location: ["Las Vegas Ballpark, Las Vegas", "Nevada"],
      button: "Take Flight Collection",
    },
    {
      id: 2,
      picUrl: "/ticket2.png",
      head: "Sacramento River Cats",
      date: ["OCT 15", "SUN", "4:30 PM"],
      location: ["Las Vegas Ballpark, Las Vegas", "California"],
      button: "Orange Collection",
    },
    {
      id: 3,
      picUrl: "/ticket1.png",
      head: "Las Vegas Aviators",
      date: ["OCT 15", "SUN", "4:30 PM"],
      location: ["Sutter Health Park, Sacramento,", "Nevada"],
      button: "Take Flight Collection",
    },
  ];
  return (
    <div className="flex items-center justify-center relative">
      <div className="absolute flex justify-center items-center  text-blue border-blue xxs:hidden xs:hidden s:hidden text-center sm:border sm:w-[3%] sm:top-30 sm:left-8 lg:left-[2%] lg:text-3xl lg:border-2 lg:py-[0.7%] lg:px-[0.7%] 2xl:w-[5%] 2xl:h-[10%] 2xl:border-4 2xl:text-3xl 2xl:font-bold">
        &lt;
      </div>
      <Ticket ticketinfo={ticketinfo}></Ticket>
      <div className="absolute flex justify-center items-center text-blue border-blue text-center xxs:hidden xs:hidden s:hidden sm:border sm:w-[3%] sm:top-30 sm:right-8 lg:right-[2%] lg:text-3xl lg:border-2 lg:py-[0.7%] lg:px-[0.7%] 2xl:w-[5%] 2xl:h-[10%] 2xl:border-4 2xl:text-3xl 2xl:font-bold ">
        &gt;
      </div>
    </div>
  );
};

export default TicketSection;
