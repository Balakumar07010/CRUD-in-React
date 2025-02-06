import React, { useContext } from "react";
import { userData } from "../App";

export const Data = () => {
  const userDatas = useContext(userData);
  const { usersFilter, handleDelete, handleUpdate } = userDatas;

  return (
    <div className="w-full my-4">
      <table className="w-full border-2 border-slate-400">
        <thead className="bg-gray-400 ">
          <tr className="text-white text-center">
            <td className="py-2 font-semibold">S.No</td>
            <td className="py-2 font-semibold">Name</td>
            <td className="py-2 font-semibold">City</td>
            <td className="py-2 font-semibold">Action</td>
            <td className="py-2 font-semibold">Action</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {usersFilter &&
            usersFilter.map((user, index) => (
              <tr key={index}>
                <td className="border-b-2 border-slate-400 py-4">
                  {index + 1}
                </td>
                <td className="border-b-2 border-slate-400 py-4">
                  {user.name}
                </td>
                <td className="border-b-2 border-slate-400 py-4">
                  {user.city}
                </td>
                <td className="border-b-2 border-slate-400 ">
                  <button
                    onClick={() => handleUpdate(user)}
                    className="bg-green-600 p-2 text-white rounded-xl font-semibold text-sm uppercase"
                  >
                    Update
                  </button>
                </td>
                <td className="border-b-2 border-slate-400 ">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-600 p-2 text-white rounded-xl font-semibold text-sm uppercase"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
