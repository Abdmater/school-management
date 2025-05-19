"use client";
import Image from "next/image";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
const data = [
  { name: "Group A", value: 80, fill: "#C3EBFA" },
  { name: "Group B", value: 20, fill: "#FAE27C" },
];
const Performmance = () => {
  return (
    <div className="bg-white p-4 rounded-md h-72 relative ">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Performnace</h1>
        <Image src="/moreDark.png" alt="more" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            // fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl font-semibold">8</h1>
        <p className="text-xs text-gray-300">of 10 max LTS</p>
      </div>
      <div className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">1st Semester - 2nd Semester</div>
    </div>
  );
};

export default Performmance;
