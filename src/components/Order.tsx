const Order = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-between px-5 m-5 rounded-md m-2">
      <h1 className="text-amber-500">Order|1</h1>
      <div className="flex flex-col">
        <p className="text-gray-500">
          Kaffir Lime Vodka Lemogras, Ginger Citrus
        </p>
        <h2>Tom Yummy | x2</h2>
        <div className="flex items-center">
          <hr className="border-t-2 border-orange-500 mx-2 w-8" />
          <p className="text-center">Table 5</p>
          <hr className="border-t-2 border-orange-500 mx-2 w-8" />
        </div>
      </div>
      <div className="price">
        <h2 className="text-amber-600">Frw 5,000</h2>
        <div className="flex items-center">
          <hr className="border-t-2 border-orange-500 mx-2 w-8" />
          <p className="text-center">Guest</p>
          <hr className="border-t-2 border-orange-500 mx-2 w-8" />
        </div>
        <p>078435434</p>
      </div>
    </div>
  );
};

export default Order;
