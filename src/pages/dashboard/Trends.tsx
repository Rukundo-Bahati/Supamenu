import { BsPlus } from "react-icons/bs";
import chart from "../../assets/chart.png";

const Trends = () => {
  return (
    <div className="flex flex-col">
      {/* upper part */}
      <div className="flex flex-wrap gap-4 items-center justify-center border py-2 m-2 border-amber-500">
        <div className="bg-white p-3 rounded-md w-40">
          <h1 className="text-center text-slate-500">Clients</h1>
          <h1 className="text-2xl text-center">60</h1>
        </div>
        <div className="bg-white p-3 rounded-md w-40">
          <h1 className="text-center font-bold">Revenues(FRW)</h1>
          <h1 className="text-2xl text-center">38234000</h1>
        </div>
        <div className="bg-white p-3 rounded-md w-40">
          <h1 className="text-center text-slate-500">Orders</h1>
          <h1 className="text-2xl text-center">67569</h1>
        </div>
      </div>
      {/* chart */}
      <div className="bg-white border border-slate-300 rounded-md m-2 flex flex-col md:flex-row items-center justify-between">
        <div className="p-3 w-full md:w-3/4">
          <h1>Today's trends</h1>
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <p className="text-gray-500">as of 25 May 2022</p>
            <div className="flex items-center gap-2 mt-2 md:mt-0 mr-4 text-slate-400">
              <p>Today</p>
              <p>Week</p>
              <p>Month</p>
              <p>Year</p>
            </div>
          </div>
          <img src={chart} alt="Chart" className="mt-4" />
        </div>
        <div className="w-full md:w-1/4 border-t md:border-t-0 md:border-l-2 border-gray-400 h-96">
          <div className="bg-white p-3 w-full border-b md:border-b-2 md:border-y-2 ">
            <h1 className="text-center text-slate-500">Orders</h1>
            <h1 className="text-xl text-center">67569</h1>
          </div>
          <div className="bg-white p-3 w-full border-b-2 ">
            <h1 className="text-center text-slate-500">Items</h1>
            <h1 className="text-xl text-center">67569</h1>
          </div>
          <div className="bg-white p-3 w-full border-b-2 ">
            <h1 className="text-center text-slate-500">Order/hour</h1>
            <h1 className="text-xl text-center">67569</h1>
          </div>
          <div className="bg-white p-3 w-full border-b-2 ">
            <h1 className="text-center text-slate-500">Clients</h1>
            <h1 className="text-xl text-center">67569</h1>
          </div>
        </div>
      </div>

      {/* lower part */}
      <div className="flex flex-wrap items-center gap-4 justify-between m-3">
  {/* left side */}
  <div className="flex flex-col items-center gap-4 w-full md:w-auto">
    <div className="rounded-md border border-slate-300 w-full md:w-80 bg-white">
      <div className="flex items-center justify-between p-3">
        <h1>Restaurants</h1>
        <h2 className="text-amber-500">View Details</h2>
      </div>
      <p className="text-gray-400 px-3">Sales</p>
      <div className="flex items-center justify-between mt-3 p-3">
        <h1>Sole luna</h1>
        <h2 className="text-slate-500">46000</h2>
      </div>
      <hr className="border-gray-600 text-xl h-1" />
      <div className="flex items-center justify-between m-3">
        <h1>Soy</h1>
        <h2 className="text-slate-500">12000</h2>
      </div>
    </div>

    <div className="rounded-md border border-slate-300 w-full md:w-80 bg-white">
      <div className="flex items-center justify-between p-3">
        <h1>Pubs</h1>
        <h2 className="text-amber-500">View Details</h2>
      </div>
      <p className="text-gray-400 px-3">Sales</p>
      <div className="flex items-center justify-between p-3">
        <h1>Sundowner</h1>
        <h2 className="text-slate-500">3000</h2>
      </div>
      <hr className="border-gray-600 text-xl h-1" />
      <div className="flex items-center justify-between m-3">
        <h1>Gate N10</h1>
        <h2 className="text-slate-500">150</h2>
      </div>
    </div>
  </div>

  {/* right side */}
  <div className="flex flex-col items-center gap-4 w-full md:w-auto">
    <div className="rounded-md border border-slate-300 w-full md:w-80 bg-white">
      <div className="flex items-center justify-between p-3">
        <h1>Hotels</h1>
        <h2 className="text-amber-500">View Details</h2>
      </div>
      <p className="text-gray-400 px-3">Sales</p>
      <div className="flex items-center justify-between mt-3 p-3">
        <h1>Park Inn</h1>
        <h2 className="text-slate-500">4328</h2>
      </div>
      <hr className="border-gray-600 text-xl h-1" />
      <div className="flex items-center justify-between m-3">
        <h1>M Hotel</h1>
        <h2 className="text-slate-500">1005</h2>
      </div>
    </div>

    <div className="rounded-md border border-slate-300 w-full md:w-80 bg-white">
      <div className="flex items-center justify-between p-3">
        <h1>Cafes</h1>
        <h2 className="text-amber-500">View Details</h2>
      </div>
      <p className="text-gray-400 px-3">Sales</p>
      <div className="flex items-center justify-between p-3">
        <h1>Aroma</h1>
        <h2 className="text-slate-500">3000</h2>
      </div>
      <hr className="border-gray-600 text-xl h-1" />
      <div className="flex items-center justify-between m-3">
        <h1>Patisserie loyale</h1>
        <h2 className="text-slate-500">500</h2>
      </div>
    </div>
  </div>

  {/* right part */}
  <div className="border border-gray-400 rounded-md w-full md:w-80 bg-white min-h-96">
    <div className="flex items-center justify-between">
      <h2 className="p-3">Create</h2>
      <h2 className="p-3 text-amber-500">View all</h2>
    </div>
    <p className="text-gray-500 px-3">Today</p>
    <div className="flex items-center justify-between m-4">
      <h2 className="text-gray-400">Create new</h2>
      <BsPlus className="bg-slate-300 rounded-sm text-xl text-slate-600 cursor-pointer" />
    </div>
    <div className="flex border-t-2 border-slate-400 p-3 items-center justify-between">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="check"
          className="rounded-3xl appearance-none border border-gray-500 bg-white checked:bg-amber-500 checked:border-transparent h-4 w-4"
        />
        <p>Restaurants</p>
      </div>
      <p className="bg-amber-500 text-white px-2 rounded-md">New</p>
    </div>
    <div className="flex border-t-2 border-slate-400 p-3 items-center justify-between">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="check"
          className="rounded-3xl appearance-none border border-gray-500 bg-white checked:bg-amber-500 checked:border-transparent h-4 w-4"
        />
        <p>Hotels</p>
      </div>
      <p className="bg-amber-500 text-white px-2 rounded-md">New</p>
    </div>

    <div className="flex border-t-2 border-slate-400 p-3 items-center justify-between">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="check"
          className="rounded-3xl appearance-none border border-gray-500 bg-white checked:bg-amber-500 checked:border-transparent h-4 w-4"
        />
        <p>Pub</p>
      </div>
      <p className="bg-slate-300 text-white px-2 rounded-md">DEFAULT</p>
    </div>
  </div>
  {/* end */}
</div>

    </div>
  );
};

export default Trends;
