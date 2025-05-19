import Image from "next/image";
import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="even:bg-yellow odd:bg-purple rounded-2xl p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] text-green-600 bg-white px-2 py-1 rounded-full">2024/25</span>
        <Image src={`/more.png`} alt={""} width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,133</h1>
      <h2 className="capitalize text-sm fonst-semibold text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
