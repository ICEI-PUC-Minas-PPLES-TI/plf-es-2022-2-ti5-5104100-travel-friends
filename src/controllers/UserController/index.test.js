const app = require("../../server");
const request = require("supertest");
const {
  user1,
  user2,
  listDatabase,
  local1,
  local2,
  listDatabase2,
  roadmap1,
  roadmap2,
  listDatabase3,
} = require("./mocks");

test("Test Cadastro de Usuário 1", async () => {
  const res = await request(app).post("/users").send(user1);

  expect(res.body).toEqual(user1);
});

test("Test Cadastro de Usuário 2", async () => {
  const res = await request(app).post("/users").send(user2);

  expect(res.body).toEqual(user2);
});

test("Test Lista de Usuários", async () => {
  const res = await request(app).get("/users");

  expect(res.body).toEqual(listDatabase);
});

test("Test Cadastro de Local 1", async () => {
  const res = await request(app).post("/locals").send(local1);

  expect(res.body).toEqual(local1);
});

test("Test Cadastro de Local 2", async () => {
  const res = await request(app).post("/locals").send(local2);

  expect(res.body).toEqual(local2);
});

test("Test Lista de Locais", async () => {
  const res = await request(app).get("/locals");

  expect(res.body).toEqual(listDatabase2);
});

test("Test Cadastro de Roteiro 1", async () => {
  const res = await request(app).post("/roadmaps").send(roadmap1);

  expect(res.body).toEqual(roadmap1);
});

test("Test Cadastro de Roteiro 2", async () => {
  const res = await request(app).post("/roadmaps").send(roadmap2);

  expect(res.body).toEqual(roadmap2);
});

test("Test Lista de Roteiros", async () => {
  const res = await request(app).get("/roadmaps");

  expect(res.body).toEqual(listDatabase3);
});
