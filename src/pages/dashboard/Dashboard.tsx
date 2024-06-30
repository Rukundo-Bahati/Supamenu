import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./Navbar";
import Orders from "./Orders";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const [openSidebar, setopenSidebar] = useState(false);

  const toggleSidebar = () => {
    setopenSidebar(!openSidebar);
  };

  return (
    <div className="flex">
      <div
        className={`fixed inset-0 z-50 lg:static lg:z-auto lg:block lg:w-54 ${
          openSidebar ? "block" : "hidden"
        } lg:flex-none`}
      >
        <Sidebar />
      </div>
      <div className="flex-1">
        <div className="lg:hidden p-4">
          <FiMenu
            className="hover:text-amber-500 text-3xl duration-300 focus:border-2 focus:border-gray-900"
            onClick={toggleSidebar}
          />
        </div>
        <Navbar />
        <Orders />
      </div>
    </div>
  );
};

export default Dashboard;
