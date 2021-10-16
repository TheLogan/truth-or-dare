import axios from "axios"
import eCard from "../Entities/eCard";

const baseUrl = 'https://api-ijnhh.ondigitalocean.app/api';
const baseLocal = 'http://localhost:8080';

export const api = {


  getCards:()=> {
    return axios.get(`${baseLocal}/game/cards`);
  },

  getAdminCards: () => {
    return axios.get(`${baseLocal}/admin/cards`);   //, {headers: {"auth":"token"}});
  },

  adminLogin: (data:{username: string, password: string}): Promise<{data:string}> => {
    return axios.post(`${baseLocal}/auth/login`, data);
  },

  saveCardSuggestion:(card: eCard) =>{
    return axios.post(`${baseLocal}/admin/suggestCardEdit`, card);
  },
  createUser: (user: {username: string, password: string}) => {
    return axios.post(`${baseLocal}/user`, user);
  }
}