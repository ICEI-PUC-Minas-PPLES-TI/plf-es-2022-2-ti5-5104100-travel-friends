import api from "..";
import { IResponse } from "../../../@types/models.interface";

export const getAllRoadmap = async() => {
  try {
    const response = await api.get("/roadmap");

    return response.data;
  } catch (error) {
    console.log("---> Roteiro error: ");
  }
};

export const createRoadmap = async (data: any) => {

  const response = await api.post("/roadmap", data);
  const res = {
    data: response.data,
    status: response.status
  }
  return res;
};

export const deleteRoadmap = async (id: string) => {
  const url = `/roadmap/${id}`;
  const response = await api.delete<IResponse>(url);
  return response;
};
