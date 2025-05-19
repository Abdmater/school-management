import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type studant = {
  id: number;
  studentId?: string;
  grade: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  class: string;
  address: string;
};

const renderRow = (item: studant) => (
  <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLigth cursor-pointer">
    <td className="flex items-center md:p-4 p-2 gap-2">
      <Image
        src={item.photo}
        alt="photo"
        width="40"
        height="40"
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <h3 className="text-xs text-gray-500">{item?.class}</h3>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.studentId}</td>
    <td className="hidden md:table-cell">{item.grade}</td>
    <td className="hidden lg:table-cell">{item.phone}</td>
    <td className="hidden lg:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={"/list/studants/" + item.id}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer bg-sky">
            <Image src="/view.png" alt="view" width={16} height={16} />
          </button>
        </Link>
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer bg-purple">
          //   <Image src="/delete.png" alt="view" width={16} height={16} />
          // </button>
          <FormModal type='delete' table='student' id={item.id}/>
        )}
      </div>
    </td>
  </tr>
);
const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },

  
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Addres",
    accessor: "addres",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
    className: "",
  },
];

const StudantListPage = () => {
  return (
    <div className="p-4 m-4 rounded-xl bg-white">
      {/* Top */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold mt-2">All Studants</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-3 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src={"/filter.png"} alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src={"/sort.png"} alt="sort" width={14} height={14} />
            </button>
            {/* {role === 'admin' && <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src={"/plus.png"} alt="plus" width={14} height={14} />
            </button>} */}
            {role === 'admin' && <FormModal type='create' table='student' />}
          </div>
        </div>
      </div>
      {/* list */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={studentsData} />
      </div>
      {/* pagination */}
      <div>
        <Pagination />
      </div>
    </div>
  );
};

export default StudantListPage;
