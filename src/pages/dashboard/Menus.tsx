import prod1 from "../../assets/products/product3.png";
import AddORder from "../../components/AddORder";
const Menus = () => {
  return (
    <div className="bg-white rounded-md p-2 m-3">
      <div className=" flex items-center gap-6">
        <div className="flex flex-col">
          <h1>Menus</h1>
          <p className="text-slate-400 text-sm">os of 25 May 2024</p>
        </div>
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
      </div>

      <div className="flex gap-4 items-center justify-around p-4 bg-gray-100 flex-wrap mt-2 rounded-lg">
        <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
          <div className="flex gap-4 bg-slate-300 rounded-lg p-2 w-80 my-3">
            <img
              src={prod1}
              alt="Product Image"
              className="object-cover h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="text-slate-500 mb-2 text-sm">
                Kaffir Lime, lemongrass, ginger{" "}
              </p>
              <h1 className="font-bold  mb-2">Tom Yummy - 12.5</h1>
              <p className="text-amber-600">Frw 5000</p>
            </div>
          </div>
          <div className="flex gap-4 bg-slate-300 rounded-lg p-2 w-80 my-3">
            <img
              src={prod1}
              alt="Product Image"
              className="object-cover h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="text-slate-500 mb-2 text-sm">gin, citrus,cucumbr</p>
              <h1 className="font-bold  mb-2">Singapore Sing- 12.5</h1>
              <p className="text-amber-600">Frw 5000</p>
            </div>
          </div>
          <div className="flex gap-4 bg-slate-300 rounded-lg p-2 w-80 my-3">
            <img
              src={prod1}
              alt="Product Image"
              className="object-cover h-20 w-20 rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="text-slate-500 mb-2 text-sm">gin, citrus,cucumbr</p>
              <h1 className="font-bold  mb-2">African chik- 12.5</h1>
              <p className="text-amber-600">Frw 5000</p>
            </div>
          </div>
        </div>
        <div className="w-96">
          <AddORder mode="" addItem="Create new Order" item="Create Item" />
        </div>
      </div>
    </div>
  );
};

export default Menus;
