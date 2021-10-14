import axios, { AxiosRequestConfig } from "axios"

const baseUrl = 'https://api-ijnhh.ondigitalocean.app/api';
const baseLocal = 'http://localhost:8080';

export const api = {


  getCards:()=> {
    return axios.get(`${baseUrl}/game/cards`);
  },

  getAdminCards: () => {
    return axios.get(`${baseLocal}/admin/cards`);   //, {headers: {"auth":"token"}});
  },

  adminLogin: (data:{username: string, password: string}): Promise<{data:string}> => {
    return axios.post(`${baseLocal}/auth/login`, data);
  },

  // getUser: async (): Promise<User> => {
  //   const response = await fetch('/user')
    
  //   return response.json()
  // }
}
