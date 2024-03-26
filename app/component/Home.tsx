import React from "react";
import Image from "next/image";
import Box from "./Box";
import ShowMoreBtn from "./ShowMoreBtn";

interface BoxInfo {
  id: number;
  picUrl: string;
  text: string;
  events: string;
  sports: string;
  info: string;
}

const Home: React.FC = () => {
  const boxinfo: BoxInfo[] = [
    {
      id: 1,
      picUrl: "/box1.png",
      text: "Sacramento River Cats",
      events: "48",
      sports: "Baseball",
      info: "",
    },
    {
      id: 2,
      picUrl: "/box2.png",
      text: "Las Vegas Aviators",
      events: "28",
      sports: "Baseball",
      info: "",
    },
    {
      id: 3,
      picUrl: "/box3.png",
      text: "New Jersey Devils",
      events: "15",
      sports: "Ice Hockey",
      info: "",
    },
    {
      id: 4,
      picUrl: "/box2.png",
      text: "Las Vegas Aviators",
      events: "28",
      sports: "Baseball",
      info: "",
    },
    {
      id: 5,
      picUrl: "/ad.png",
      text: "Advertisement title",
      events: "",
      sports: "",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="mt-[2%] flex-column">
      <div className="flex justify-center">
        <Box boxinfo={boxinfo}></Box>
      </div>
      <ShowMoreBtn></ShowMoreBtn>
    </div>
  );
};

export default Home;
