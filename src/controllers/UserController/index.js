const users = require("../../database/users");
const locals = require("../../database/locals");
const roadmaps = require("../../database/roadmaps");

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

function insertLocal(req, res) {
  const { name, address, cep, openTime, closeTime, location } = req.body;

  const local = {
    name,
    address,
    cep,
    openTime,
    closeTime,
    location,
  };

  locals.push(local);

  delete local.id;

  return res.status(201).json(local);
}

function selectLocal(req, res) {
  return res.status(200).json(locals);
}

function insertRoadMap(req, res) {
  const {
    title,
    description,
    favorites,
    isFree,
    price,
    type,
    person,
    start,
    end,
  } = req.body;

  const roadmap = {
    title,
    description,
    favorites,
    isFree,
    price,
    type,
    person,
    start,
    end,
  };

  roadmaps.push(roadmap);

  delete roadmap.id;

  return res.status(201).json(roadmap);
}

function selectRoadMap(req, res) {
  return res.status(200).json(roadmaps);
}

module.exports = {
  insertUser,
  selectUser,
  insertLocal,
  selectLocal,
  insertRoadMap,
  selectRoadMap,
};
