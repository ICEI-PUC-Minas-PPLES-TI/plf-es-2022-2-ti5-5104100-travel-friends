const users = require("../../database/users");

function insertUser(req, res) {
  const { name, email, cpf, password } = req.body;

  const user = {
    name,
    email,
    cpf,
    password,
  };

  users.push(user);

  delete user.id;

  return res.status(201).json(user);
}

function selectUser(req, res) {
  return res.status(200).json(users);
}

module.exports = {
  insertUser,
  selectUser,
};
