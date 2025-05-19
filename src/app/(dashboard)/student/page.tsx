import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import EventCalender from "@/components/EventCalender";
import React from "react";

const StudantPage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4">
      {/* left */}
      <div className="w-full lg:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* rigth */}
      <div className="w-full lg:w-1/3 flex flex-col gap-5">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
};

export default StudantPage;
