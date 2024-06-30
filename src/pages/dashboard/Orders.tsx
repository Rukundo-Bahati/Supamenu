import AddORder from "../../components/AddORder";
import Order from "../../components/Order";
import OrderDetails from "../../components/OrderDetails";

const Orders = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-lg m-5 lg:max-w-7xl mx-auto p-4">
      <div className="flex flex-col p-3 lg:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-x-12 items-center mb-3">
          <div className="left">
            <h1>Orders</h1>
            <p className="text-gray-400">As of 25 May 2022, 09:41 PM</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-4 items-center justify-center mt-4 lg:mt-0">
            <button className="bg-amber-500 text-white rounded-xl p-3 w-24 hover:bg-amber-600 hover:border-2 hover:border-white duration-500">
              New
            </button>
            <button className="bg-transparent border-2 border-amber-500 w-24 text-amber-500 rounded-xl p-3 hover:bg-amber-500 hover:text-white duration-500">
              Delivered
            </button>
            <button className="bg-transparent border-2 border-amber-500 w-24 text-amber-500 rounded-xl p-3 hover:bg-amber-500 hover:text-white duration-500">
              Rejected
            </button>
            <button className="bg-transparent border-2 border-amber-500 w-24 text-amber-500 rounded-xl p-3 hover:bg-amber-500 hover:text-white duration-500">
              All
            </button>
          </div>
        </div>
        <Order orderno="order|1" />
        <Order orderno="order|2" />
        <Order orderno="order|3" />
        <Order orderno="order|4" />
        <Order orderno="order|5" />
        <Order orderno="order|6" />
      </div>
      <div className="flex flex-col lg:w-1/3">
        <h2 className="text-xl font-bold mb-4 text-center lg:text-center my-4 lg:my-4">
          Order Summary
        </h2>
        <div>
          <OrderDetails action="Delivery" quantity="6" />
          <OrderDetails action="Waiting" quantity="12" />
          <hr />
          <OrderDetails action="Rejected" quantity="1" />
          <hr />
          <OrderDetails action="All" quantity="30" />
          <hr />
        </div>
        <AddORder />
      </div>
    </div>
  );
};

export default Orders;
