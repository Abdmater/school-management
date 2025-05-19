import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";
import React from "react";

export type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const renderRow = (item: Class) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLigth cursor-pointer"
  >
    <td className=" md:p-4 p-2 gap-2">{item.name}</td>
    <td className="">{item.capacity}</td>
    <td className="hidden lg:table-cell">{item.grade}</td>
    <td className="hidden lg:table-cell">{item.supervisor}</td>
    <td>
      <div className="flex items-center gap-2">
        {/* <Link href={"/list/studant/" + item.id}> */}
          <FormModal type="update" table="class" id={item.id} />
        {/* </Link> */}
        {role === "admin" && (
          <FormModal type="delete" table="class" id={item.id} />
        )}
      </div>
    </td>
  </tr>
);
const columns = [
  {
    header: "Class Name",
    accessor: "className",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "",
  },

  {
    header: "Garde",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
    className: "",
  },
];

const ClassListPage = () => {
  return (
    <div className="p-4 sm:m-4 m-1 rounded-xl bg-white">
      {/* Top */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold mt-2">
          All Classes
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-3 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src={"/filter.png"} alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src={"/sort.png"} alt="sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              //   <Image src={"/plus.png"} alt="plus" width={14} height={14} />
              // </button>
              <FormModal type="create" table="class" />
            )}
          </div>
        </div>
      </div>
      {/* list */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={classesData} />
      </div>
      {/* pagination */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default ClassListPage;
