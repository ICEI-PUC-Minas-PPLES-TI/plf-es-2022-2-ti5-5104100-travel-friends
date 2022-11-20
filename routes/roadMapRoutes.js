const router = require("express").Router();

const RoadMap = require("../models/RoadMap");

//criação de Roteiro
router.post("/", async (req, res) => {
  const {
    idCreator,
    idLocal,
    title,
    description,
    favorites,
    isFree,
    price,
    type,
    person,
    start,
    end,
    participants,
  } = req.body;

  if (!title) {
    res.status(422).json({ error: "Título é obrigatório" });
    return;
  }

  const roadmap = {
    idCreator,
    idLocal,
    title,
    description,
    favorites,
    isFree,
    price,
    type,
    person,
    start,
    end,
    participants,
  };

  try {
    await RoadMap.create(roadmap);

    res.status(201).json({ message: "Roteiro adicionado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Retornar todos os Roteiros
router.get("/", async (req, res) => {
  try {
    const roadmaps = await RoadMap.find();

    res.status(200).json(roadmaps);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Retornar um Roteiro por Id
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const roadmap = await RoadMap.findOne({ _id: id });

    if (!roadmap) {
      res.status(422).json({ message: "Roteiro não encontrado" });
      return;
    }

    res.status(200).json(roadmap);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Atualizar Roteiro
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const {
    idCreator,
    idLocal,
    title,
    description,
    favorites,
    isFree,
    price,
    type,
    person,
    start,
    end,
    participants,
  } = req.body;

  const roadmap = {
    idCreator,
    idLocal,
    title,
    description,
    favorites,
    isFree,
    price,
    type,
    person,
    start,
    end,
    participants,
  };

  try {
    const updatedRoadMap = await RoadMap.updateOne({ _id: id }, roadmap);

    if (updatedRoadMap.matchedCount === 0) {
      res.status(422).json({ message: "Roteiro não encontrado" });
      return;
    }

    res.status(200).json(roadmap);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//atualizar Favoritos de um Roteiro
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { favorites } = req.body;

  const roadmap = {
    favorites,
  };

  try {
    const updatedFavorites = await RoadMap.updateOne({ _id: id }, roadmap);

    if (updatedFavorites.matchedCount === 0) {
      res.status(422).json({ message: "Roteiro não encontrado" });
      return;
    }

    res.status(200).json(roadmap);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//atualizar Participantes de um Roteiro
router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { participants, person } = req.body;

  const roadmap = {
    participants,
    person,
  };

  try {
    const updatedParticipants = await RoadMap.updateOne({ _id: id }, roadmap);

    if (updatedParticipants.matchedCount === 0) {
      res.status(422).json({ message: "Roteiro não encontrado" });
      return;
    }

    res.status(200).json(roadmap);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Apagar um Roteiro
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const roadmap = await RoadMap.findOne({ _id: id });

  if (!roadmap) {
    res.status(422).json({ message: "Roteiro não encontrado" });
    return;
  }

  try {
    await RoadMap.deleteOne({ _id: id });

    res.status(200).json({ message: "Roteiro removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
