//MOCKS DO ROADMAP
export const ROADMAP_MOCK = {
    "_id": "637d89c4fc4f9fbc3c7e84b4",
    "idCreator": "6379795c8508851789e199d8",
    "idLocal": "637d7f6afc4f9fbc3c7e84a6",
    "title": "Shopping Estação BH",
    "description": "Shopping com opções de compras e restaurantes, além de cinema e atividades para crianças",
    "favorites": false,
    "isFree": false,
    "price": 50,
    "type": "shopping",
    "person": 30,
    "start": "15:00",
    "end": "19:00",
    "participants": [
        {
            "idUser": "63797b303e4b3442a2454448",
            "_id": "637d8d26fc4f9fbc3c7e84c2"
        },
        {
            "idUser": "6379795c8508851789e199d8",
            "_id": "637d8d26fc4f9fbc3c7e84c3"
        },
        {
            "idUser": "637aae4ebbaa0875734381a9",
            "_id": "637d8d26fc4f9fbc3c7e84c4"
        },
        {
            "idUser": "637d7cc4fc4f9fbc3c7e847e",
            "_id": "637d8d26fc4f9fbc3c7e84c5"
        }
    ],
    "__v": 0
};

export const CREATE_ROADMAP_MOCK = {
  "idCreator": "6379795c8508851789e199d8",
  "idLocal" : "63797f9b8508851789e19a02",
  "title": "Shopping Estação BH",
  "description": "Shopping com opções de compras e restaurantes, além de cinema e atividades para crianças",
  "favorites": false,
  "isFree": false,
  "price": 50,
  "type" : "shopping",
  "person" : 2,
  "start" : "15:00",
  "end" : "19:00",
  "participants" : [
      { 
          "idUser": "63797b303e4b3442a2454448"
      },
      {
          "idUser": "6379795c8508851789e199d8"
      }
  ]
};

export const UPDATE_ROADMAP_MOCK = {
    "isFree": false,
}

//MOCKS DO USUÁRIO
export const USER_MOCK = {
    "email": "admin@gmail.com",
    "password": "admin",
}

export const CREATE_USER_MOCK = {
    "name": "teste",
    "email": "teste@gmail.com",
    "cpf": "58269314728",
    "password": "12345"
}

//MOCKS DO PLACE
export const CREATE_PLACE_MOCK = {
    "idCreator": "6354a463ace1d86cd649cdc4",
    "name": "Praça da Liberdade",
    "address": "Praça da Liberdade - Savassi",
    "cep": "30140-010",
    "openTime": "08:00",
    "closeTime": "22:00",
    "location": {
        "lat": "-19.8221587",
        "lng": "-44.1417172"
    }
}

export const PLACES_MOCK = [
    {
        "location": {
            "lat": -19.82074,
            "lng": -43.94695
        },
        "_id": "637d7f6afc4f9fbc3c7e84a6",
        "idCreator": "6379795c8508851789e199d8",
        "name": "Shopping Estação BH",
        "address": "Av. Cristiano Machado, 11833 - Vila Cloris",
        "cep": "31744-007",
        "openTime": "10:00",
        "closeTime": "22:00",
        "__v": 0
    },
    {
        "location": {
            "lat": -19.93267,
            "lng": -43.93859
        },
        "_id": "637d80affc4f9fbc3c7e84a8",
        "idCreator": "6379795c8508851789e199d8",
        "name": "Praça da Liberdade",
        "address": "Praça da Liberdade, s/n - Funcionários",
        "cep": "30140-010",
        "openTime": "00:00",
        "closeTime": "23:59",
        "__v": 0
    },
    {
        "location": {
            "lat": -19.9275,
            "lng": -43.9474
        },
        "_id": "637d813ffc4f9fbc3c7e84aa",
        "idCreator": "6379795c8508851789e199d8",
        "name": "Diamond Mall",
        "address": "Av. Olegário Maciel, 1600 - Lourdes",
        "cep": "30180-915",
        "openTime": "10:00",
        "closeTime": "22:00",
        "__v": 0
    },
    {
        "location": {
            "lat": -19.93349,
            "lng": -43.93848
        },
        "_id": "637d82d4fc4f9fbc3c7e84ad",
        "idCreator": "6379795c8508851789e199d8",
        "name": "Palácio da Liberdade",
        "address": "Praça da Liberdade, s/nº - Funcionários",
        "cep": "30140-010",
        "openTime": "10:00",
        "closeTime": "16:00",
        "__v": 0
    },
    {
        "location": {
            "lat": -19.93437,
            "lng": -43.93968
        },
        "_id": "637d8521fc4f9fbc3c7e84b0",
        "idCreator": "6379795c8508851789e199d8",
        "name": "Casa Fiat de Cultura",
        "address": "Praça da Liberdade, 10 - Funcionários",
        "cep": "30140-010",
        "openTime": "10:00",
        "closeTime": "19:00",
        "__v": 0
    },
    {
        "location": {
            "lat": -19.9192076,
            "lng": -43.9383714
        },
        "_id": "637d9309fc4f9fbc3c7e84f6",
        "idCreator": "6379795c8508851789e199d8",
        "name": "Cine Theatro Brasil Vallourec",
        "address": "Av. Amazonas, 315 - Centro",
        "cep": "30180-000",
        "openTime": "08:00",
        "closeTime": "22:00",
        "__v": 0
    },
    {
        "location": {
            "lat": -19.92596,
            "lng": -43.93356
        },
        "_id": "637d931efc4f9fbc3c7e84f8",
        "idCreator": "6379795c8508851789e199d8",
        "name": "Palácio das Artes",
        "address": "Av. Afonso Pena, 1537 BH, ",
        "cep": "30130-004",
        "openTime": "09:00",
        "closeTime": "21:00",
        "__v": 0
    },
    {
        "location": {
            "lat": -19.9287137,
            "lng": -43.9393089
        },
        "_id": "637d9325fc4f9fbc3c7e84fa",
        "idCreator": "6379795c8508851789e199d8",
        "name": "Basílica N. Senhora de Lourdes",
        "address": "R. da Bahia, 1596 - Lourdes",
        "cep": "30160-011",
        "openTime": "09:00",
        "closeTime": "21:00",
        "__v": 0
    },
    {
        "location": {
            "lat": -19.93401,
            "lng": -43.93634
        },
        "_id": "637d932bfc4f9fbc3c7e84fc",
        "idCreator": "6379795c8508851789e199d8",
        "name": "PUC Minas Praça da Liberdade - Prédio 5",
        "address": "R. Santa Rita Durão, 1160 - Funcionários",
        "cep": "30140-111",
        "openTime": "07:00",
        "closeTime": "22:00",
        "__v": 0
    }
]