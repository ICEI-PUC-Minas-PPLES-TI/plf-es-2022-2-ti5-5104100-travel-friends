import api from "..";
import { IResponse } from "../../../@types/models.interface";


export const getAllPlaces = async() => {
  try {
    const response = await api.get("/local");

    return response.data;
  } catch (error) {
    return error;
  }
};

export const createPlace = async (data: any) => {
    try{
        const response = await api.post<IResponse>("/local", data);
        return response.data;
    }catch(error){
        return error;
    }
};

export const getPlace = async (idPlace: any) => {
    const url = `/local/${idPlace}`;
    try{
        const response = await api.get(url);
        return response.data;
    }catch(error){
        return error;
    };
};

export const updatePlace = async(idPlace: any, data: any) => {
    const url = `/local/${idPlace}`;
    try{
        const response = await api.patch(url, data);
        return response.data;
    }catch(error){
        return error;
    }
};

export const deletePlace = async(idPlace: any) => {
    const url = `/local/${idPlace}`;
    try{
        const response = await api.delete<IResponse>(url);
        return response.data; 
    }catch(error){
        return error;
    }
}

