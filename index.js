const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

require("dotenv").config();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  app.use(cors());
});

app.use(express.json());

const port = process.env.PORT || 3000;

const roadMapRoutes = require("./routes/roadMapRoutes");
const localRoutes = require("./routes/localRoutes");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/User");

app.use("/roadmap", roadMapRoutes);
app.use("/local", localRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Api Funcionando" });
});

app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  const user = await User.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Acesso negado!" });
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (error) {
    return res.status(400).json({ message: "Token inválido!" });
  }
}

app.post("/auth/register", async (req, res) => {
  const { name, email, cpf, password } = req.body;

  if (!name) {
    return res.status(422).json({ error: "Por favor, insira seu nome!" });
  }
  if (!email) {
    return res.status(422).json({ error: "Por favor, insira seu email!" });
  }
  if (!cpf) {
    return res.status(422).json({ error: "Por favor, insira seu cpf!" });
  }
  if (!password) {
    return res.status(422).json({ error: "Por favor, insira sua senha!" });
  }

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ error: "Este email já está cadastrado!" });
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    cpf,
    password: passwordHash,
  });

  try {
    await user.save();

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error });
  }
});

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(422).json({ error: "Por favor, insira seu email!" });
  }

  if (!password) {
    return res.status(422).json({ error: "Por favor, insira sua senha!" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(422).json({ error: "Usuário não encontrado!" });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ error: "Senha incorreta!" });
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: user._id,
      },
      secret
    );

    res
      .status(200)
      .json({ message: "Autentificação realizada com sucesso!", token });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error });
  }
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@apicluster.1nigmuz.mongodb.net/?retryWrites=true&w=majority`
  )

  .then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(port);
  })

  .catch((err) => console.log(err));
