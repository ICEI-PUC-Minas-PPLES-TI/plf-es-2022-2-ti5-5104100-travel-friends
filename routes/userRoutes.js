const router = require("express").Router();

const User = require("../models/User");

//leitura de dados
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
