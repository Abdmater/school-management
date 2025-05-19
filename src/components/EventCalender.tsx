"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const events = [
  {
    id: 0,
    title: "Lorem ipsum dolor sit",
    time: "12:00 PM - 2:00 PM",
    desciption:
      "Lorem ipsum dolor sit amet consec adipisicing elit. Nisi ullam amet esse quia nulla vitae. ",
  },
  {
    id: 1,
    title: "Lorem ipsum dolor sit",
    time: "12:00 PM - 2:00 PM",
    desciption:
      "Lorem ipsum dolor sit amet consec adipisicing elit. Nisi ullam amet esse quia nulla vitae. ",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    time: "12:00 PM - 2:00 PM",
    desciption:
      "Lorem ipsum dolor sit amet consec adipisicing elit. Nisi ullam amet esse quia nulla vitae. ",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit",
    time: "12:00 PM - 2:00 PM",
    desciption:
      "Lorem ipsum dolor sit amet consec adipisicing elit. Nisi ullam amet esse quia nulla vitae. ",
  },
];

function EventCalender() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-xl p-4 ">
      {/* Calendar */}
      <div className="mb-2">
        <Calendar onChange={onChange} value={value} />
      </div>
      {/* title Event */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-lg font-semibold">Events</h1>
        <Image
          src="/moreDark.png"
          alt="more"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      {/* Event */}
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-3 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple cursor-pointer "
          >
            <div className="flex items-center justify-between mb-1">
              <h1 className="font-semibold text-gray-700">{event.title}</h1>
              <span className="text-xs text-gray-400">{event.time}</span>
            </div>
            <p className="text-sm line-clamp-1 text-gray-500">
              {event.desciption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalender;
