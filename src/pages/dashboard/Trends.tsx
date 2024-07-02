import chart from "../../assets/chart.png";

const Trends = () => {
  return (
    <div className="flex flex-col">
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
    </div>
  );
};

export default Trends;
