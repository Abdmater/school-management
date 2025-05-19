import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalender from "@/components/EventCalender";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* left */}
      <div className="w-full md:w-2/3 flex flex-col gap-5">
        <div className="flex justify-between gap-4 flex-wrap">
          <UserCard type="studant" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[350]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[350]">
            {" "}
            <AttendanceChart />{" "}
          </div>
        </div>
        {/* bontom chart */}
        <div className="w-full h-[400px]">
          <FinanceChart />
        </div>
      </div>
      {/* rigth */}
      <div className="w-full md:w-1/3 flex flex-col gap-5">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
