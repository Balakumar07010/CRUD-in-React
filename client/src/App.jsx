import { createContext, useEffect, useState } from "react";
import { Data } from "./components/Data";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import axios from "axios";
import { AddForm } from "./components/AddForm";

export const userData = createContext();
function App() {
  const [users, setUsers] = useState([]);
  const [usersFilter, setUsersFilter] = useState([]);
  const [isOpen, setIsOpen] = useState(false); //Open the Model
  const [formData, setFormData] = useState({ name: "", city: "" });
  const getUsers = async () => {
    const URL = await axios("http://localhost:8000/users");
    setUsers(URL.data);
    setUsersFilter(URL.data);
  };

  // Search Function
  const handleSearch = (e) => {
    let searchValue = e.target.value.toLowerCase();
    let filterData = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue) ||
        user.city.toLowerCase().includes(searchValue)
    );
    setUsersFilter(filterData);
  };

  // Delete a User
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      await axios.delete(`http://localhost:8000/users/${id}`).then((res) => {
        setUsers(res.data);
        setUsersFilter(res.data);
      });
    }
  };

  // Get the users data from the server for the first time
  useEffect(() => {
    getUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.id) {
      await axios
        .patch(`http://localhost:8000/users/${formData.id}`, formData)
        .then((res) => {
          console.log(res);
        });
    } else {
      await axios.post("http://localhost:8000/users", formData).then((res) => {
        console.log(res);
      });
    }
    getUsers();
    setIsOpen(false);
    setFormData({ name: "", city: "" });
  };
  const handleUpdate = (user) => {
    setFormData(user);
    setIsOpen(true);
  }

  return (
    <>
      <userData.Provider
        value={{
          users,
          setUsers,
          handleSearch,
          usersFilter,
          handleDelete,
          setIsOpen,
          handleChange,
          handleSubmit,
          formData,
          setFormData,
          handleUpdate,
        }}
      >
        <Nav />
        <div className="w-full  md:w-1/2 mx-auto p-4">
          <Search />
          <Data />
          {isOpen && <AddForm />}
        </div>
      </userData.Provider>
    </>
  );
}

export default App;
