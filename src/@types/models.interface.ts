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
    idCreator?: string;
    idLocal: string;
    title: string;
    description?: string;
    isFree: boolean;
    favorites: boolean | false;
    price: number | null;
    type: string;
    person: number;
    start: string;
    end: string;
    participants: [
      {
        idUser: string;
        _id: string;
      }
    ] | [];
    _id?: string;
  }
  
  export interface Local {
    _id?: string;
    idCreator: string;
    name: string;
    address: string;
    cep: string;
    openTime: string;
    closeTime: string;
    location: ILocation;
    __v: number | 0;
  }

  export interface ILocation {
    lat: number;
    lng: number;
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
  