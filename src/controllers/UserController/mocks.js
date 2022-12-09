const listDatabase = [
  {
    name: "João",
    email: "joão@gmail.com",
    cpf: "22222222222",
    password: "123456",
  },
  {
    name: "Maria",
    email: "maria@gmail.com",
    cpf: "33333333333",
    password: "123456",
  },
];

const listDatabase2 = [
  {
    name: "PUC Minas Praça da Liberdade - Prédio 5",
    address: "R. Santa Rita Durão, 1160 - Funcionários",
    cep: "30140-111",
    openTime: "07:00",
    closeTime: "22:00",
    location: {
      lat: -19.9333792,
      lng: -43.9378502,
    },
  },
  {
    name: "Shopping Estação BH",
    address: "Av. Cristiano Machado, 11833 - Vila Cloris",
    cep: "31744-007",
    openTime: "10:00",
    closeTime: "22:00",
    location: {
      lat: -19.82074,
      lng: -43.94695,
    },
  },
];

const listDatabase3 = [
  {
    title: "Palestra na Puc",
    description:
      "É uma universidade católica localizada na praça da liberdade ",
    favorites: false,
    isFree: true,
    price: 0,
    type: "educacao",
    person: 12,
    start: "19:00",
    end: "21:00",
  },
  {
    title: "Role no Shopping",
    description: "Fica localizado no shopping Boulevard ",
    favorites: false,
    isFree: true,
    price: 0,
    type: "shopping",
    person: 5,
    start: "19:00",
    end: "21:00",
  },
];

const user1 = {
  name: "João",
  email: "joão@gmail.com",
  cpf: "22222222222",
  password: "123456",
};

const user2 = {
  name: "Maria",
  email: "maria@gmail.com",
  cpf: "33333333333",
  password: "123456",
};

const local1 = {
  name: "PUC Minas Praça da Liberdade - Prédio 5",
  address: "R. Santa Rita Durão, 1160 - Funcionários",
  cep: "30140-111",
  openTime: "07:00",
  closeTime: "22:00",
  location: {
    lat: -19.9333792,
    lng: -43.9378502,
  },
};

const local2 = {
  name: "Shopping Estação BH",
  address: "Av. Cristiano Machado, 11833 - Vila Cloris",
  cep: "31744-007",
  openTime: "10:00",
  closeTime: "22:00",
  location: {
    lat: -19.82074,
    lng: -43.94695,
  },
};

const roadmap1 = {
  title: "Palestra na Puc",
  description: "É uma universidade católica localizada na praça da liberdade ",
  favorites: false,
  isFree: true,
  price: 0,
  type: "educacao",
  person: 12,
  start: "19:00",
  end: "21:00",
};

const roadmap2 = {
  title: "Role no Shopping",
  description: "Fica localizado no shopping Boulevard ",
  favorites: false,
  isFree: true,
  price: 0,
  type: "shopping",
  person: 5,
  start: "19:00",
  end: "21:00",
};

module.exports = {
  listDatabase,
  user1,
  user2,
  local1,
  local2,
  listDatabase2,
  roadmap1,
  roadmap2,
  listDatabase3,
};
