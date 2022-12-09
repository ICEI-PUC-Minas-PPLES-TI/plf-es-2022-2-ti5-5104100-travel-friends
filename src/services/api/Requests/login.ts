import api from "..";
import { UserLogin, UserRegister, IResponse } from "../../../@types/models.interface";

export const loginUser = async (data: UserLogin) => {
    try {
      const response = await api.post<IResponse>('/auth/login', data);
      return response;
  } catch (error) {
      return error.response;
  };
};

export const resetPassword = async (data: UserLogin) => {
  let url = `/user/${data.email}`;
  try {
    const response = await api.patch<IResponse>(url, {
      password: data.password,
    });
    return response;
  } catch (error) {
      return error.response;
  };
};

export const registerUser = async (data: UserRegister) => {
  try {
    const response = await api.post<IResponse>('/auth/register', data);
    return response;
  } catch (error) {
      return error.response;
  };
};
