"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    icome: 4000,
    expence: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    icome: 3000,
    expence: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    icome: 2000,
    expence: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    icome: 2780,
    expence: 3908,
    amt: 2000,
  },
  {
    name: "May",
    icome: 1890,
    expence: 4800,
  },
  {
    name: "Jun",
    icome: 2390,
    expence: 3800,
  },
  {
    name: "jul",
    icome: 7490,
    expence: 2300,
  },
  {
    name: "Aug",
    icome: 3990,
    expence: 6300,
  },
  {
    name: "Sep",
    icome: 5090,
    expence: 2300,
  },
  {
    name: "Oct",
    icome: 6290,
    expence: 4300,
  },
  {
    name: "Nov",
    icome: 3490,
    expence: 4300,
  },
  {
    name: "Dec",
    icome: 4490,
    expence: 1300,
  },
];

const FinanceChart = () => {
  return (
    <div className="w-full h-full rounded-xl p-4 bg-white">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Finances</h1>
        <Image
          src="/moreDark.png"
          alt="more"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      {/* Chart */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="expence"
            stroke="#C3EBFA"
            strokeWidth={"3"}
          />
          <Line
            type="monotone"
            dataKey="icome"
            stroke="#FAE27C"
            strokeWidth={"3"}
          />
        </LineChart>
        
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
