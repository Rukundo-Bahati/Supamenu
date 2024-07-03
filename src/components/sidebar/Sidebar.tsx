import { ReactNode } from "react";
import { FaUser } from "react-icons/fa";
import {
  FiGrid,
  FiFileText,
  FiBook,
  FiSettings,
  FiTable,
  FiUsers,
} from "react-icons/fi";

interface Props {
  setActiveComponent: (component: string) => void;
}

const Sidebar = ({ setActiveComponent }:Props) => {
  return (
    <div className="bg-slate-950 flex flex-col gap-5 border-l-2 border-amber-600 pt-10">
      <h1 className="text-2xl md:text-2xl p-4 font-semibold">
        <span className="text-amber-500">Supa</span>
        <span className="text-white">Menu</span>
      </h1>
      <div className="flex flex-col gap-4 text-gray-400 mb-32 p-4 px-3">
        <div
          className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer"
          onClick={() => setActiveComponent("Trends")}
        >
          <FiFileText />
          <span>Overview</span>
        </div>
        <div
          className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer"
          onClick={() => setActiveComponent("Clients")}
        >
          <FiUsers/>
          <span>Clients</span>
        </div>
        <div
          className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer"
          onClick={() => setActiveComponent("Orders")}
        >
          <FiGrid />
          <span>Orders</span>
        </div>

        <div
          className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer"
          onClick={() => setActiveComponent("Menus")}
        >
          <FiBook />
          <span>Menu</span>
        </div>

        <div
          className="flex items-center gap-2 hover:text-white duration-300 cursor-pointer"
          onClick={() => setActiveComponent("Profile")}
        >
          <FiTable />
          <span>Profile</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-gray-400 mt-24">
        <hr className="w-full" />
        <div
          className="flex items-center gap-2 hover:text-white duration-300 px-4 cursor-pointer"
          onClick={() => setActiveComponent("Settings")}
        >
          <FiSettings />
          <span>Settings</span>
        </div>
        <div
          className="flex items-center gap-2 hover:text-white duration-300 px-4 cursor-pointer"
          onClick={() => setActiveComponent("MyAccount")}
        >
          <FaUser />
          <span>My Account</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
