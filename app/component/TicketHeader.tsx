import React from "react";

const TicketHeader = () => {
  return (
    <div
      className="text-center w-3/4 mx-auto sm:mt-7 sm:mb-6
    "
    >
      <span className="text-5xl font-poppins block font-bold xxs:text-3xl xxs:mb-[15%] xs:text-2xl xs:mt-[15%] s:text-3xl s:mt-[15%] s:mb-[3%] sm:text-3xl sm:mb-4 md:text-3xl md:mb-[3%] lg:text-4xl xl:mt-[8%] 2xl:text-6xl">
        Collection Spotlight
      </span>
      <span className="block font-inter text-base1 xxs:text-a5 xxs:mb-[5%] xs:text-a4 xs:mt-[7%] xs:mb-[5%] s:text-a5 s:mb-[4%] sm:text-a5 md:text-a4 md:mb-[2%] lg:text-a7 2xl:text-a9">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </span>
    </div>
  );
};

export default TicketHeader;
