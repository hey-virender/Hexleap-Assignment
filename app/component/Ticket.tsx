import React from "react";
interface TicketInfo {
  id: number;
  picUrl: string;
  head: string;
  date: string[];
  location: string[];
  button: string;
}
interface TicketProps {
  ticketinfo: TicketInfo[];
}
const Ticket: React.FC<TicketProps> = ({ ticketinfo }) => {
  return (
    <div className="w-3/4 flex justify-center gap-[5%] p-[1%] xxs:flex-column xxs:gap-[1%] xxs:w-[100%] xs:gap-[1%] xs:w-[100%] s:w-[100%] sm:gap-[3%]">
      {ticketinfo.map((ticket) => (
        <div className="w-1/3 flex-column text-center justify-center bg-bglight dark:bg-boxColorDark relative items-start xs:w-4/5 xxs:w-4/5 s:w-4/5 xl:p-[0.1%]">
          <div className="flex items-center relative">
            <img
              className="mx-auto my-0 object-cover w-full"
              src={ticket.picUrl}
            ></img>
            <div className="m-0 p-0 bg-bgwhite dark:bg-bgdark z-10 w-4 h-4 rounded-full absolute bottom-[0%] -left-[6%] xxs:w-3 xxs:h-3 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-7 2xl:w-7"></div>

            <div className=" p-0 bg-dashed-grey-transparent dark:bg-dashed-white-transparent left-[5%] right-[2%] w-4/5 h-[0.40%] mx-auto absolute bottom-[3.4%] sm:h-[0.27%] md:h-[0.30%] 2xl:h-[0.50%]"></div>

            <div className="m-0 p-0 bg-bgwhite dark:bg-bgdark z-10 w-4 h-4 rounded-full absolute bottom-[0%] -right-[6%] xxs:w-3 xxs:h-3 md:h-5 md:w-5 lg:h-6 lg:w-6  xl:h-7 xl:w-7  2xl:h-7 2xl:w-7  "></div>
          </div>
          <div className="text-center mx-auto flex-column justify-center xxs:mt-0 sm:mp-1 sm:gap-[6%] lg:gap-[7%]">
            <div className="text-base font-medium xxs:text-a4 xxs:mt-[0%] xs:text-a5  s:text-a6 sm:text-a5 sm:pb-1 md:text-a5 lg:text-a7 xl:text-a8 xl:mt-[5%] 2xl:text-a9 2xl:pt-[6%]">
              {ticket.head}
            </div>
            <div className="text-base1 block font-medium xxs:text-a3 xs:text-a3 s:text-a5 sm:text-a3 sm:pb-1 md:text-a3 md:pb-[1.5%] lg:text-a5 xl:text-a6 xl:pt-[2%] 2xl:text-a7">
              {ticket.date[0]}
              <span>|</span>
              {ticket.date[1]}
              <span>|</span>
              {ticket.date[2]}
            </div>
            <div className="block text-base1 text-greyLight dark:text-ad xxs:text-a3 xs:text-a3 s:text-a5 sm:text-a3 md:text-a3 lg:text-a5 xl:text-a6 2xl:text-a7">
              {ticket.location[0]}
            </div>
            <div className="block text-base1 text-greyLight dark:text-ad  mb-[4%] xxs:text-a3 xs:text-a3 s:text-a5 sm:text-a3 md:text-a3 lg:text-a5 xl:text-a6 2xl:text-a7">
              {ticket.location[1]}
            </div>
          </div>
          <div className="bg-black text-white mx-auto mb-2 w-[90%] xxs:text-a3 xxs:mt-[4.5%] xs:text-a3 xs:p-[1.5%] s:text-a4 s:py-[1.5%] sm:text-a3 sm:p-1 sm:mt-[1%] md:text-a4 lg:text-a5 xl:text-a6 xl:py-[1%] 2xl:text-a7">
            {ticket.button}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ticket;
