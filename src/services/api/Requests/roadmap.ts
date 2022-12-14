import api from "..";
import { IResponse, RoadMap } from "../../../@types/models.interface";

export const getAllRoadmap = async() => {
  try {
    const response = await api.get("/roadmap");

    return response.data;
  } catch (error) {
    console.log("---> Roteiro error: ");
  }
};

export const createRoadmap = async (data: RoadMap) => {
  const response = await api.post<IResponse>("/roadmap", data);
  return response;
};

export const updateRoadmap = async (data: any) => {
  const url = `/roadmap/${data.idCreator}`;
  const response = await api.patch<IResponse>(url, '');
  return response;
};

export const deleteRoadmap = async (id: string) => {
  const url = `/roadmap/${id}`;
  const response = await api.delete<IResponse>(url);
  return response;
};
