const router = require("express").Router();

const Local = require("../models/Local");

//criação de dados
router.post("/", async (req, res) => {
  const { idCreator, name, address, cep, openTime, closeTime } = req.body;

  if (!name) {
    res.status(422).json({ error: "O nome é obrigatório" });
    return;
  }
  if (!address) {
    res.status(422).json({ error: "O endereço é obrigatório" });
    return;
  }
  if (!cep) {
    res.status(422).json({ error: "O CEP é obrigatório" });
  }

  const local = {
    idCreator,
    name,
    address,
    cep,
    openTime,
    closeTime,
  };

  try {
    await Local.create(local);

    res.status(201).json({ message: "Local adicionado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//leitura de dados
router.get("/", async (req, res) => {
  try {
    const locals = await Local.find();

    res.status(200).json(locals);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const local = await Local.findOne({ _id: id });

    if (!local) {
      res.status(422).json({ message: "Local não encontrado" });
      return;
    }

    res.status(200).json(local);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { idCreator, name, address, cep, openTime, closeTime } = req.body;

  const local = {
    idCreator,
    name,
    address,
    cep,
    openTime,
    closeTime,
  };

  try {
    const updatedLocal = await Local.updateOne({ _id: id }, local);

    if (updatedLocal.matchedCount === 0) {
      res.status(422).json({ message: "Local não encontrado" });
      return;
    }

    res.status(200).json(local);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const local = await Local.findOne({ _id: id });

  if (!local) {
    res.status(422).json({ message: "Local não encontrado" });
    return;
  }

  try {
    await Local.deleteOne({ _id: id });

    res.status(200).json({ message: "Local removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
