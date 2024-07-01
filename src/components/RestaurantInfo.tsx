import { BsPlus } from "react-icons/bs";
import ProfileCard from "./ProfileCard";

const RestaurantInfo = () => {
  return (
    <div className="flex flex-col g-2">
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <ProfileCard bg1="bg-amber-500" bg2="bg-slate-300" bg3="bg-slate-300" />
        <div className="border w-96 border-gray-300 p-4 rounded-lg  flex flex-col mt-5">
          <h1>Restaurant Information</h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Restaurant Name"
            className="p-2 rounded-md bg-transparent text-slate-600 border border-gray-300 m-3 focus:outline-none"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Restaurant Complete Name"
            className="p-2 rounded-md bg-transparent text-slate-600 border border-gray-300 m-3 focus:outline-none"
          />
          <h2>Contacts Number @ Restaurant</h2>
          <div className="flex items-center border border-gray-300 rounded-lg  bg-transparent mt-3">
            <span className="text-gray-500 pl-2">+250 |</span>
            <input
              type="number"
              placeholder="Mobile number"
              className="flex-1 p-2 focus:outline-none  bg-transparent rounded-r-lg"
            />
          </div>
          <h2 className="my-2">Restaurant owner details</h2>
          <div className="flex items-center border border-gray-300 rounded-lg  bg-transparent mt-3">
            <span className="text-gray-500 pl-2">+250 |</span>
            <input
              type="number"
              placeholder="Mobile number"
              className="flex-1 p-2 focus:outline-none  bg-transparent rounded-r-lg"
            />
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              name=""
              id=""
              placeholder="Owner Name"
              className="p-2 rounded-md bg-transparent text-slate-600 border border-gray-300 m-3 focus:outline-none w-1/2"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder=" owner email"
              className="p-2 rounded-md bg-transparent text-slate-600 border border-gray-300 m-3 focus:outline-none w-1/2"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-center">
        <ProfileCard bg2="bg-amber-500" bg1="bg-slate-300" bg3="bg-slate-300" />
        <div className="border w-96 border-gray-300 p-4 rounded-lg flex flex-col mt-5">
          <h2 className="text-sm">
            Restaurant type(restaurant,hotel,pub,coffeshop,other)
          </h2>

          <form className="max-w-sm mx-auto mb-3">
            <select
              id="countries"
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-80 mt-4 p-2.5"
            >
              <option selected>Restaurant</option>
              <option value="US">Pub</option>
              <option value="CA">Hotel</option>
              <option value="FR">Coffeshop</option>
              <option value="DE">other</option>
            </select>
          </form>
          <form className="max-w-sm mx-auto mb-3">
            <select
              id="countries"
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-80 mt-4 p-2.5"
            >
              <option selected>African</option>
              <option value="US">American</option>
              <option value="CA">Asian</option>
              <option value="FR">European</option>
              <option value="DE">other</option>
            </select>
          </form>
          <h1> Opening hours</h1>
          <div className="flex gap-3">
            <div className="flex items-center border border-gray-300 rounded-lg bg-transparent mt-3 w-40">
              <span className="text-gray-500 pl-2">From|</span>
              <input
                type="date"
                className="p-2 focus:outline-none bg-transparent rounded-r-lg w-full"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg bg-transparent mt-3 w-40">
              <span className="text-gray-500 pl-2">To|</span>
              <input
                type="date"
                className="p-2 focus:outline-none bg-transparent rounded-r-lg w-full"
              />
            </div>
          </div>
          <h2 className="mt-3">Upload images</h2>

          <input
            type="file"
            placeholder="Choose file"
            className="flex-1 p-2 focus:outline-none  bg-transparent rounded-lg border border-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-center">
        <ProfileCard bg1="bg-slate-300" bg2="bg-slate-300" bg3="bg-amber-500" />
        <div className="border w-96 border-gray-300 p-4 rounded-lg flex flex-col my-5">
          <div className="flex flex-wrap gap-2 w-full items-center mt-4 lg:mt-0">
            <button className="bg-amber-500 text-white rounded-xl p-2 w-16 hover:bg-amber-600 hover:border-2 hover:border-white duration-500">
              New
            </button>
            <button className="bg-transparent border-2 border-amber-500 text-amber-500 rounded-xl p-2 w-18 hover:bg-amber-500 hover:text-white duration-500">
              Delivered
            </button>
            <button className="bg-transparent border-2 border-amber-500 text-amber-500 rounded-xl p-2 w-18 hover:bg-amber-500 hover:text-white duration-500">
              Rejected
            </button>
            <button className="bg-transparent border-2 border-amber-500 text-amber-500 rounded-xl p-2 w-16 hover:bg-amber-500 hover:text-white duration-500">
              All
            </button>
          </div>
          <div className="flex flex-col m-2 ">
            <label htmlFor="name" className="m-3">
              Name
            </label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Menu name"
              className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
            />
          </div>
          <div className="flex flex-col m-2 ">
            <label htmlFor="price" className="m-3">
              Price
            </label>
            <input
              type="text"
              name=""
              id="price"
              placeholder="Rwf"
              className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
            />
          </div>
          <div className="flex flex-col m-2 ">
            <label htmlFor="desc" className="m-3">
              Menu description
            </label>
            <input
              type="text"
              name=""
              id="desc"
              placeholder="Ingeredients"
              className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
            />
          </div>
          <div className="flex flex-col m-2 ">
            <label htmlFor="img" className="m-3">
              Upload image
            </label>
            <input
              type="file"
              placeholder="Choose file"
              className="flex-1 p-2 focus:outline-none  bg-transparent rounded-lg border border-gray-400"
            />
          </div>
          <div className="flex items-center g-2">
            <button className="bg-transparent border-2 border-amber-500 text-amber-500 rounded-lg p-2 w-24 hover:bg-amber-500 hover:text-white duration-500">
              Add more
            </button>
            <BsPlus className="bg-slate-400  text-3xl mx-2 rounded-md h-9 cursor-pointer hover:bg-slate-300 duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
