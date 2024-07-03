import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./Navbar";
import Orders from "./Orders";
import Clients from "./Clients";
import ClientForm from "./ClientForm";
import Profile from "./Profile";
import Trends from "./Trends";
import Menus from "./Menus";
import { FiMenu } from "react-icons/fi";
import MyAccount from "./MyAccount";
import Settings from "./Settings";

const Dashboard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Orders");

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Orders":
        return <Orders />;
      case "Clients":
        return <Clients />;
      case "ClientForm":
        return <ClientForm />;
      case "Profile":
        return <Profile />;
      case "Trends":
        return <Trends />;
      case "Menus":
        return <Menus />;
      case "MyAccount":
        return <MyAccount />;
      case "Settings":
        return <Settings />;
      default:
        return <Clients />;
    }
  };

  return (
    <div className="flex">
      <div
        className={`fixed inset-10 z-50 lg:static lg:z-auto lg:block lg:w-54 ${
          openSidebar ? "block" : "hidden"
        } lg:flex-none`}
      >
        <Sidebar setActiveComponent={setActiveComponent} />
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
        {renderComponent()}
      </div>
    </div>
  );
};

export default Dashboard;
