import api from "../api";

export async function getAllRoadmap() {
  try {
    const response = await api.get("/roadmap");

    const data = {
      data: response.data,
      status: response.status,
    };

    console.log(data);
    return data;
  } catch (error) {
    console.log("---> Roteiro error: ");
  }
}
