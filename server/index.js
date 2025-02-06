const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

const port = 8000;
const users_data = require("./Data/data.json");

const corsOrigin = {
  origin: "http://localhost:5173", //or whatever port your frontend is using
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOrigin));
app.use(express.json());

app.get("/users", (req, res) => {
  return res.json(users_data);
});
// DELETE request
app.delete("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let filterData = users_data.filter((user) => user.id != id);
  fs.writeFile("./Data/data.json", JSON.stringify(filterData), (err, data) =>
    res.json(filterData)
  );
});
// ADD Data request
app.post("/users", (req, res) => {
  let id = Date.now();
  let { name, city } = req.body;
  if (name === "" || city === "") {
    return res.status(400).send({ message: "Name and city cannot be empty" });
  }
  users_data.push({ id, name, city });

  fs.writeFile("./Data/data.json", JSON.stringify(users_data), (err, data) =>
    res.json({ message: "Data added successfully" })
  );
});
// UPDATE Data request
app.patch("/users/:id", (req, res) => {
  let id = Number(req.params.id);
  let { name, city } = req.body;
  if (name === "" || city === "") {
    return res.status(400).send({ message: "Name and city cannot be empty" });
  }
  let index = users_data.findIndex((user) => user.id == id);
  users_data.splice(index, 1, { ...req.body });

  fs.writeFile("./Data/data.json", JSON.stringify(users_data), (err, data) =>
    res.json({ message: "Data updatded successfully" })
  );
});

app.listen(port, (err) =>
  console.log(err ? err : `Server is running on port ${port}`)
);
