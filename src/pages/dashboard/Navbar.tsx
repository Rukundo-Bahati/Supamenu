import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import user from "../../assets/arenas .jpg";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h1 className="text-2xl md:text-2xl">
            <span className="text-black">Orders</span>
          </h1>
          <div className="flex items-center space-x-4 md:space-x-6">
            {searchOpen && (
              <input
                type="text"
                className="ml-2 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-yellow-300"
                placeholder="Search..."
              />
            )}
            <BsSearch
              className="text-gray-600 text-xl md:text-2xl cursor-pointer"
              onClick={toggleSearch}
            />
            <FaBell className="text-gray-600 text-xl md:text-2xl" />
            <div className="border-l-2 border-gray-500 h-8 mx-2"></div>
            <span className="text-slate-800">Jaques Kagabo</span>
            <img
              className="w-8 h-8 md:w-14 md:h-14 rounded-full border-2 border-slate-600"
              src={user}
              alt="user photo"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
