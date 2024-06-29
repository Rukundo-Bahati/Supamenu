const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-950 text-xl py-5">
      <div className="mt-4">
        <h1 className="text-white font-bold text-3xl">
          Register your restaurant on SupaMenu
        </h1>
        <p className="text-white">For free and get more revenue!</p>
      </div>
      <div className="flex gap-5 items-center my-5">
        <button className="p-2 rounded-md bg-orange-500 text-white hover:bg-transparent hover:border hover:border-white duration-500">
          Register Your Restaurant
        </button>
        <button className="p-2 rounded-md border border-white text-white hover:bg-orange-500 hover:text-white duration-500">
          Restaurant already registered? Signin
        </button>
      </div>
    </div>
  );
};

export default Header;
