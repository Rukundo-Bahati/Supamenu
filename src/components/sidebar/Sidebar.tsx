import { FaUser } from "react-icons/fa";
import {
  FiGrid,
  FiFileText,
  FiBook,
  FiSettings,
  FiTable,
} from "react-icons/fi";
const Sidebar = () => {
  return (
    <div className="bg-slate-950 flex flex-col gap-5 h-screen border-l-2 border-amber-600 pt-10">
      <h1 className="text-2xl md:text-2xl p-4 font-semibold">
        <span className="text-amber-500">Supa</span>
        <span className="text-white">Menu</span>
      </h1>
      <div className="flex flex-col gap-4 text-gray-400 mb-32 p-4 px-3">
        <div className="flex items-center gap-2 hover:text-white duration-300">
          <FiGrid />
          <a href="#">Overview</a>
        </div>
        <div className="flex items-center gap-2 hover:text-white duration-300">
          <FiTable />
          <a href="#">Tables</a>
        </div>
        <div className="flex items-center gap-2 hover:text-white duration-300">
          <FiFileText />
          <a href="#">Orders</a>
        </div>
        <div className="flex items-center gap-2 hover:text-white duration-300">
          <FiBook />
          <a href="#">Menus</a>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-gray-400 mt-32">
        <hr className="w-full" />
        <div className="flex items-center gap-2 hover:text-white duration-300 px-4 ">
          <FiSettings />
          <a href="#" className="hover:text-white">
            Settings
          </a>
        </div>
        <div className="flex items-center gap-2 hover:text-white duration-300 px-4 ">
          <FaUser />
          <a href="#">My Account</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
