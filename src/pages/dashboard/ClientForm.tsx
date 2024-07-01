const ClientForm = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-white m-4 rounded-lg w-1/2 border border-amber-500 shadow-lg shadow-sky-300">
        <h1 className="text-center my-6 font-semibold">Client</h1>
        <div className="flex flex-col m-2 ">
          <label htmlFor="name" className="m-3">
            Client
          </label>
          <input
            type="text"
            name=""
            id="name"
            placeholder="Client name"
            className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col m-2 ">
          <label htmlFor="category" className="m-3">
            Category
          </label>
          <input
            type="text"
            name=""
            id="category"
            placeholder="choose category"
            className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col m-2 ">
          <label htmlFor="representative" className="m-3">
            Representative
          </label>
          <input
            type="text"
            name=""
            id="representative"
            placeholder="Names"
            className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col m-2 ">
          <label htmlFor="date" className="m-3">
            Date of creation
          </label>
          <input
            type="text"
            name=""
            id="date"
            placeholder="month & year"
            className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col m-2 ">
          <label htmlFor="address" className="m-3">
            Address
          </label>
          <input
            type="text"
            name=""
            id="address"
            placeholder="province,district,sector,cell"
            className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col m-2 ">
          <label htmlFor="email" className="m-3">
            Email
          </label>
          <input
            type="text"
            name=""
            id="email"
            placeholder="Email"
            className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col m-2 ">
          <label htmlFor="phone" className="m-3">
            Phone
          </label>
          <input
            type="number"
            name=""
            id="phone"
            placeholder="Phone"
            className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
          />
        </div>
        <div className="flex flex-col m-2 ">
          <label htmlFor="bank" className="m-3">
            Phone
          </label>
          <input
            type="number"
            name=""
            id="bank"
            placeholder="Bank account number (BAN)"
            className="border-b-2 border-gray-400 bg-transparent px-3 focus:outline-none"
          />
        </div>
        <button className="bg-amber-500 rounded-lg p-2 float-right text-white m-3 hover:bg-transparent hover:border hover:border-slate-500 hover:text-amber-500 duration-500">
          Add client
        </button>
      </div>
    </div>
  );
};

export default ClientForm;
