export declare interface AuthUser {
  data: User,
  status: number
}

export type UserRegister = {
  name: string;
  email: string;
  cpf: string;
  password: string;
};

export type UserLogin = {
  email: string;
  password: string;
};

export declare interface IResponse {
  data: null;
  status: number;
}

export interface User {
    cpf: string;
    email: string;
    id: string;
    message: string;
    name: string;
    TOKEN: string | null;
  }
  
  export interface RoadMap {
    _id?: string;
    idCreator?: string;
    idLocal: string;
    title: string;
    description?: string;
    isFree: boolean;
    price: number;
    type: string;
    person: number;
    start: string;
    end: string;
    participants: [
      {
        idUser: string;
        _id: string;
      }
    ];
  }
  
  export interface Local {
    _id?: string;
    idCriador: string;
    name: string;
    address: string;
    cep: string;
    openTime: string;
    closeTime: string;
    location: ILocation;
  }

  export interface ILocation {
    lat: string;
    lng: string;
  }


  export interface TRoadmaps {
    restaurante: string;
    loja: string;
    museu: string;
    igreja: string;
    praca: string;
    parque: string;
    shopping: string;
    arLivre: string;
    educacao: string;
  }
  