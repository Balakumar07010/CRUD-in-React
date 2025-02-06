import React, { useContext } from "react";
import { userData } from "../App";

export const AddForm = () => {
  const userDatas = useContext(userData);
  const { formData, handleChange, handleSubmit, setIsOpen } = userDatas;
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 ">
      <div className="fixed inset-0 flex items-center justify-center bg-transprent bg-opacity-40 backdrop-blur-md z-50">
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-xl w-80 backdrop-blur-lg">
          <h2 className="text-xl font-semibold mb-4">Add Details</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-500 rounded-md bg-opacity-30 placeholder-gray-500 focus:outline-none"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border-2 border-gray-500 rounded-md bg-opacity-30 
                  placeholder-gray-500 focus:outline-none"
                placeholder="Enter city"
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg border-2 border-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
