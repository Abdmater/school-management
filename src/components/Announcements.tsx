import React from 'react'
const announcements = [
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
const Announcements = () => {
  return (
    <div className='bg-white rounded-xl p-4'>
        <div className="flex justify-between items-center mb-3">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className='text-gray-500 text-xs cursor-pointer'>view all</span>
      </div>
      {/* Event */}
      <div className="flex flex-col gap-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="p-3 rounded-md  odd:bg-skyLigth even:bg-purpleLigth cursor-pointer ">
            <div className="flex items-center justify-between mb-1">
              <h1 className="font-semibold text-gray-700">{announcement.title}</h1>
              <span className="text-xs text-gray-400 bg-white p-1 rounded-full">{announcement.time}</span>
            </div>
            <p className="text-sm line-clamp-2 text-gray-500">{announcement.desciption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcements