"use client";

import Image from "next/image";
import { useState } from "react";
import TeacherForm from "./forms/TeacherForm";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-yellow"
      : type === "update"
      ? "bg-sky"
      : "bg-purple";

  const [open , setOpen] = useState<boolean>(false)  
  
  const Form = () => {
    return type === 'delete' && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
         <span className="text-center font-medium">All data will be lost , Are youe sure you went to delete this {table}</span> 
         <button className="text-white bg-red-700 py-2 px-4 rounded-md border-none w-fit self-center">Delete</button>
      </form>
    ):(
      <TeacherForm type="create"/>
    )
  }
  return (
    <>
      <button onClick={()=> setOpen(true)}
        className={`${size} flex items-center  justify-center rounded-full ${bgColor}`}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-full h-screen top-0 left-0 fixed bg-black/50 z-50 flex items-center justify-center border ">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[40%] 2xl:w-[40%] border">
            <Form />
            <div className="absolute top-4 right-4 cursor-pointer" onClick={()=> setOpen(false)}>
              <Image src='/close.png' width={16} height={16} alt="close"/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
