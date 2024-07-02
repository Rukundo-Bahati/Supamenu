import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./Navbar";
import Orders from "./Orders";
import { FiMenu } from "react-icons/fi";
import Clients from "./Clients";
import ClientForm from "./ClientForm";
import Profile from "./Profile";
import Trends from "./Trends";
import Menus from "./Menus";

const Dashboard = () => {
  const [openSidebar, setopenSidebar] = useState(false);

  const toggleSidebar = () => {
    setopenSidebar(!openSidebar);
  };

  return (
    <div className="flex">
      <div
        className={`fixed inset-10 z-50 lg:static lg:z-auto lg:block lg:w-54 ${
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
        <div className="w-full">
          <Navbar />
        </div>
        {/* <Orders /> */}
        {/* <Clients /> */}
        {/* <ClientForm /> */}
        {/* <Profile /> */}
        {/* <Trends /> */}
        <Menus />
      </div>
    </div>
  );
};

export default Dashboard;
