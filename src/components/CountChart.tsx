"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  
];

const CountChart = () => {
  return (
    <div className="w-full h-full rounded-xl p-4 bg-white">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Studants</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} className="cursor-pointer" />
      </div>
      {/* chart */}
      <div className="w-full h-[65%] relative">
        <ResponsiveContainer >
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src='/maleFemale.png' width={50} height={50} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
      </div>
      {/* bottm */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="rounded-full w-4 h-4 bg-sky" />
          <h1 className="font-semibold">1,234</h1>
          <h1 className="text-xs text-grey-300 ">Boys (55%)</h1>
        </div>
        <div className="flex flex-col gap-1">
          <div className="rounded-full w-4 h-4 bg-yellow" />
          <h1 className="font-semibold">1,234</h1>
          <h1 className="text-xs text-grey-300 ">Grils (55%)</h1>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
