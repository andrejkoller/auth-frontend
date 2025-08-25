import { RegisterRequest } from "@/models/RegisterRequest";
import axiosInstance from "./axiosInstance";
import { LoginRequest } from "@/models/LoginRequest";
import { AuthResponse } from "@/models/AuthResponse";

export const register = async (request: RegisterRequest): Promise<void> => {
  try {
    await axiosInstance.post(`/auth/register`, request);
  } catch (error) {
    console.error("Error registering user:", error);
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
