import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { resultsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  date: string;
  type: string;
  score: number;
};

const renderRow = (item: result) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLigth cursor-pointer"
  >
    <td className=" md:p-4 p-2 gap-2">{item.subject}</td>
    <td className="">{item.student}</td>
    <td className="hidden md:table-cell">{item.score}</td>
    <td className="hidden lg:table-cell">{item.teacher}</td>
    <td className="hidden lg:table-cell">{item.class}</td>
    <td className="hidden lg:table-cell">{item.date}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={"/list/studant/" + item.id}>
        <FormModal type='update' table='result' id={item.id}/>

        </Link>
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer bg-purple">
          //   <Image src="/delete.png" alt="view" width={16} height={16} />
          // </button>
          <FormModal type='delete' table='result' id={item.id}/>
        )}
      </div>
    </td>
  </tr>
);
const columns = [
  {
    header: "Subject Name",
    accessor: "subjectName",
  },
  {
    header: "Studant",
    accessor: "student",
    className: "",
  },

  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden lg:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
    className: "",
  },
];

const ParentListPage = () => {
  return (
    <div className="p-4 m-4 rounded-xl bg-white">
      {/* Top */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold mt-2">
          All Studants
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
              <FormModal type='create' table='result' />
            )}
          </div>
        </div>
      </div>
      {/* list */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={resultsData} />
      </div>
      {/* pagination */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default ParentListPage;
