import React from "react";
import TopSection from "./TopSection";
import ShowMoreBtn from "./ShowMoreBtn";

const Home = () => {
  return (
    <div className="mt-[2%] flex-column">
      <div className="flex justify-center">
        <TopSection></TopSection>
      </div>
      <ShowMoreBtn></ShowMoreBtn>
    </div>
  );
};

export default Home;
