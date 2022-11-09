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

router.patch("/:email", async (req, res) => {
  const email = req.params.email;

  const { password } = req.body;

  const user = {
    password,
  };

  try {
    const updatedPassword = await User.updateOne({ email: email }, user);

    if (updatedPassword.matchedCount === 0) {
      res.status(422).json({ message: "Usuário não encontrado" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
