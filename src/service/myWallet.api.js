/* eslint-disable import/no-anonymous-default-export */
import axios, { AxiosError } from "axios";

const AxiosIntance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { "Content-Type": "application/json" },
});

const authenticateUser = async (body) => {
    try {
        const response = await AxiosIntance.post("auth/login", body);
        return response.data;
    } catch (error) {
        throw new AxiosError(error.response.data.message);
    }
};

const registerUser = async (body) => {
    try {
        const response = await AxiosIntance.post("auth/register", body);
        return response.data;
    } catch (error) {
        throw new AxiosError(error.response.data.message);
    }
};

export default {
    authenticateUser,
    registerUser
}

