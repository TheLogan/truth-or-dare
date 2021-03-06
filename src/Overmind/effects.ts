import axios from "axios";
import eCard, { eCardEdit } from "../Entities/eCard";

const baseUrl = "https://logans-truth-or-dare-server.herokuapp.com"
const baseLocal = "http://localhost:8080";

const apiUrl = () => {
  return process.env.DB_ENV === "Local" ? baseLocal : baseUrl;
};

export const api = {
  getCards: () => {
    return axios.get(`${apiUrl()}/game/cards`);
  },

  getAdminCards: () => {
    return axios.get(`${apiUrl()}/admin/cards`);
  },

  getAdminEdits: () => {
    return axios.get(`${apiUrl()}/admin/cardEdits`)
  },

  adminLogin: (data: {
    username: string;
    password: string;
  }): Promise<{ data: { token: string; role: "ADMIN" | "USER" } }> => {
    return axios.post(`${apiUrl()}/auth/login`, data);
  },

  saveCardSuggestion: (card: eCard) => {
    return axios.post(`${apiUrl()}/admin/suggestCardEdit`, card);
  },
  suggestCardDeletion: (id: number) => {
    console.log(`id`, id)
    return axios.post(`${apiUrl()}/admin/suggestCardDeletion`, { id });
  },
  createUser: (user: { username: string; password: string }) => {
    return axios.post(`${apiUrl()}/user`, user);
  },

  acceptEdit: (edit: eCardEdit) => { 
    return axios.post(`${apiUrl()}/admin/acceptEdit`, edit);
  },
  rejectEdit: (edit: eCardEdit) => { 
    return axios.post(`${apiUrl()}/admin/rejectEdit`, edit);
  }
};
