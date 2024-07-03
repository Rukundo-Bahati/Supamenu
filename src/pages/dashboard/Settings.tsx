import React from "react";

const Settings = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto">
        <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
        <div className="grid grid-cols-1 pt-3 pb-10">
          <div className="col-span-1 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            <div className="pt-4">
              <h1 className="py-2 text-2xl font-semibold">Team settings</h1>
              {/* <p className="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
            </div>
            <hr className="mt-4 mb-8" />
            <p className="py-2 text-xl font-semibold">Teams</p>
            <div className="space-y-2">
              <div className="cursor-pointer rounded-md border bg-white px-6 py-2 text-2xl hover:bg-blue-50">
                Marketing
              </div>
              <div className="cursor-pointer rounded-md border bg-blue-100 px-6 py-2 text-2xl">
                UI/UX Design
              </div>
              <div className="cursor-pointer rounded-md border bg-white px-6 py-2 text-2xl hover:bg-blue-50">
                Engineering
              </div>
            </div>
            <hr className="mt-4 mb-8" />
            <p className="py-2 text-xl font-semibold">Members</p>
            <div className="space-y-1">
              <div className="rounded-md border bg-white">
                <div className="flex w-full items-center px-6 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span> Shakir Ali</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto h-5 w-5 cursor-pointer text-gray-400 active:scale-95"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col space-y-3 px-4 py-6 sm:px-10">
                  <label className="block" htmlFor="name">
                    <p className="text-sm">Name</p>
                    <input
                      className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                      type="text"
                      value="Shakir Ali"
                    />
                  </label>
                  <label className="block" htmlFor="email">
                    <p className="text-sm">Email</p>
                    <input
                      className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                      type="email"
                      value="shakir.ali@company.com"
                    />
                  </label>
                  <label className="block" htmlFor="team">
                    <p className="text-sm">Team</p>
                    <select
                      className="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                      name="team"
                      value="UI/UX Design"
                    >
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Engineering">Engineering</option>
                    </select>
                  </label>
                  <button className="mt-4 ml-auto rounded-lg bg-blue-600 px-10 py-2 text-white">
                    Save
                  </button>
                </div>
              </div>
              <div className="rounded-md border bg-white">
                <div className="flex w-full items-center px-6 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Ebbie James</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto h-5 w-5 cursor-pointer text-gray-400 active:scale-95"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
              </div>
              <div className="rounded-md border bg-white">
                <div className="flex w-full items-center px-6 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Mica Calister</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-auto h-5 w-5 cursor-pointer text-gray-400 active:scale-95"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <hr className="mt-4 mb-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
