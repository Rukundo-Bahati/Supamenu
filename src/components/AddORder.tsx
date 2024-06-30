import { BsPlus } from "react-icons/bs";

const AddORder = () => {
  return (
    <div className="border border-gray-400 rounded-md">
      <h2 className="p-3">Add Order</h2>
      <p className="text-gray-500 px-3">Manually</p>
      <div className="flex items-center justify-between m-4">
        <h2 className="text-gray-400">Create New Order</h2>
        <BsPlus className="bg-slate-300 rounded-sm text-xl text-slate-600 cursor-pointer" />
      </div>
      <div className="flex border-t-2 border-slate-400 p-3 items-center justify-between">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="check"
            className="rounded-3xl appearance-none border border-gray-500 bg-white checked:bg-amber-500 checked:border-transparent h-4 w-4"
          />
          <p>Desert</p>
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
          <p>Main</p>
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
          <p>Drink</p>
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
          <p>Appetizer</p>
        </div>
        <p className="bg-slate-300 text-white px-2 rounded-md">DEFAULT</p>
      </div>
      <div className="flex border-t-2 border-slate-400 p-3 items-center justify-between">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="check"
            className="rounded-3xl appearance-none border border-gray-500 bg-white checked:bg-amber-500 checked:border-transparent h-4 w-4"
          />
          <p>Starter</p>
        </div>
        <p className="bg-amber-500 text-white px-2 rounded-md">New</p>
      </div>
    </div>
  );
};

export default AddORder;
