import React from "react";
import "tailwindcss/tailwind.css";
import Header from "./component/Header";
import Home from "./component/Home";
import TicketHeader from "./component/TicketHeader";
import TicketSection from "./component/TicketSection";
import { ThemeProvider } from "next-themes";
import { useRef } from "react";

function page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="systum" enableSystem>
      <div className="mx-[5%] sm:mx-[3%] relative ">
        <Header></Header>
        <Home />
        <TicketHeader />
        <TicketSection />
      </div>
    </ThemeProvider>
  );
}

export default page;
