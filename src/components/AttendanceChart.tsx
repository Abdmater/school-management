"use client";
import Image from "next/image";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", present: 55, absent: 44 },
  { name: "Tue", present: 60, absent: 40 },
  { name: "Wed", present: 70, absent: 30 },
  { name: "Thu", present: 65, absent: 35 },
  { name: "Fri", present: 50, absent: 50 },
];

const AttendanceChart = () => {
  return (
    <div className="w-full h-full rounded-xl p-4 bg-white shadow">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Attendance</h1>
        <Image
          src="/moreDark.png"
          alt="more"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      
      {/* Chart */}
      <div className="">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barSize={20} >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
            <XAxis dataKey="name" axisLine={false}/>
            <YAxis axisLine={false} />
            <Tooltip />
            <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop : '15px',paddingBottom : '20px'}} />
            <Bar dataKey="present" fill="#FAE27C" legendType="circle" radius={[10 ,10,0,0]} />
            <Bar dataKey="absent" fill="#C3EBFA" legendType="circle" radius={[10 ,10,0,0]}  />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
