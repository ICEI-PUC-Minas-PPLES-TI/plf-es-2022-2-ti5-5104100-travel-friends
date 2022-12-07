const app = require("../../server");
const request = require("supertest");
const { user1, user2, listDatabase } = require("./mocks");

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
