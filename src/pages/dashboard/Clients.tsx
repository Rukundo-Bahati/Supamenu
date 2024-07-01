import { BiSortUp } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { FiEye, FiFilter, FiMoreVertical } from "react-icons/fi";

const Clients = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-4">
        <div className="flex flex-col w-1/5 items-center justify-center">
          <h2 className="text-2xl font-semibold">New client</h2>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="add a new client"
              className="border-2 rounded-md bg-transparent focus:outline-none p-2 w-80"
            />
            <FaPlus className="cursor-pointer bg-slate-300 p-2 rounded-md h-10 ml-2 text-4xl" />
          </div>
        </div>
      </div>

      <div className="border border-gray-400 rounded-md m-3">
        <div className="flex justify-between">
          <h2 className="p-3">All Clients</h2>
          <div className="flex mr-4">
            <div className="flex items-center">
              <BiSortUp className="text-slate-400" />
              <h2 className="p-3">Sort</h2>
            </div>
            <div className="flex items-center">
              <FiFilter className="text-slate-400" />
              <h2 className="p-3">Filter</h2>
            </div>
          </div>
        </div>
        <div className="m-4">
  <div className="grid grid-cols-5 gap-4 text-gray-400">
    <h2>Client Details</h2>
    <h2>Sales</h2>
    <h2>Detailed Report</h2>
    <h2>Categories</h2>
  </div>

  <div className="border-t-2 border-slate-400 p-3">
    <div className="grid grid-cols-5 gap-4 items-center">
      <div>
        <h2>Soy Restaurant</h2>
        <p className="text-gray-400">Updated 1 day ago</p>
      </div>
      <div>
        <h2>233455Frw</h2>
        <p className="text-gray-400">On 24/04/2019</p>
      </div>
      <div>
        <FiEye className="text-amber-500 text-2xl" />
      </div>
      <p className="bg-gray-400 text-white px-2 rounded-2xl w-16">Resto</p>
      <div className="flex justify-end">
        <FiMoreVertical className="text-2xl cursor-pointer" />
      </div>
    </div>
  </div>     
  <div className="border-t-2 border-slate-400 p-3">
    <div className="grid grid-cols-5 gap-4 items-center">
      <div>
        <h2>Soy Restaurant</h2>
        <p className="text-gray-400">Updated 1 day ago</p>
      </div>
      <div>
        <h2>233455Frw</h2>
        <p className="text-gray-400">On 24/04/2019</p>
      </div>
      <div>
        <FiEye className="text-amber-500 text-2xl" />
      </div>
      <p className="bg-gray-400 text-white px-2 rounded-2xl w-16">Resto</p>
      <div className="flex justify-end">
        <FiMoreVertical className="text-2xl cursor-pointer" />
      </div>
    </div>
  </div>     
  <div className="border-t-2 border-slate-400 p-3">
    <div className="grid grid-cols-5 gap-4 items-center">
      <div>
        <h2>Soy Restaurant</h2>
        <p className="text-gray-400">Updated 1 day ago</p>
      </div>
      <div>
        <h2>233455Frw</h2>
        <p className="text-gray-400">On 24/04/2019</p>
      </div>
      <div>
        <FiEye className="text-amber-500 text-2xl" />
      </div>
      <p className="bg-gray-400 text-white px-2 rounded-2xl w-16">Resto</p>
      <div className="flex justify-end">
        <FiMoreVertical className="text-2xl cursor-pointer" />
      </div>
    </div>
  </div>     
  <div className="border-t-2 border-slate-400 p-3">
    <div className="grid grid-cols-5 gap-4 items-center">
      <div>
        <h2>Soy Restaurant</h2>
        <p className="text-gray-400">Updated 1 day ago</p>
      </div>
      <div>
        <h2>233455Frw</h2>
        <p className="text-gray-400">On 24/04/2019</p>
      </div>
      <div>
        <FiEye className="text-amber-500 text-2xl" />
      </div>
      <p className="bg-gray-400 text-white px-2 rounded-2xl w-16">Resto</p>
      <div className="flex justify-end">
        <FiMoreVertical className="text-2xl cursor-pointer" />
      </div>
    </div>
  </div>     
          
        </div>
      </div>
    </div>
  );
};

export default Clients;
