import api from "..";
import { IResponse, Local } from "../../../@types/models.interface";


export const getAllPlaces = async() => {
  try {
    const response = await api.get("/local");

    return response;
  } catch (error) {
    return error;
  }
};

export const createPlace = async (data: Local) => {
    try{
        const response = await api.post<IResponse>("/local", data);
        return response;
    }catch(error){
        return error;
    }
};

export const getPlace = async (idPlace: any) => {
    const url = `/local/${idPlace}`;
    try{
        const response = await api.get<IResponse>(url);
        return response;
    }catch(error){
        return error;
    };
};

export const updatePlace = async(idPlace: any, data: Local) => {
    const url = `/local/${idPlace}`;
    try{
        const response = await api.patch<IResponse>(url, data);
        return response;
    }catch(error){
        return error;
    }
};

export const deletePlace = async(idPlace: any) => {
    const url = `/local/${idPlace}`;
    try{
        const response = await api.delete<IResponse>(url);
        return response; 
    }catch(error){
        return error;
    }
}

