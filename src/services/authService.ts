import { RegisterRequest } from "@/models/user/RegisterRequest";
import axiosInstance from "./axiosInstance";
import { LoginRequest } from "@/models/user/LoginRequest";
import { AuthResponse } from "@/models/user/AuthResponse";

export const register = async (request: RegisterRequest): Promise<void> => {
  try {
    await axiosInstance.post(`/auth/register`, request);
  } catch (error) {
    console.error("Error registeFring user:", error);
    throw error;
  }
};

export const login = async (request: LoginRequest): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post(`/auth/login`, request);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await axiosInstance.post(`/auth/logout`);
  } catch (error) {
    console.error("Error logging out user:", error);
  } finally {
    window.location.href = "/signin";
  }
};
