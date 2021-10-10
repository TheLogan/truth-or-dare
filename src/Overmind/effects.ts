import axios from "axios"

const baseUrl = 'https://api-ijnhh.ondigitalocean.app/api';

export const api = {


  getCards:()=> {
    return axios.get(`${baseUrl}/game/cards`);
  },

  getAdminCards: () => {
    return axios.get(`${baseUrl}/admin/cards`);
  }

  // getUser: async (): Promise<User> => {
  //   const response = await fetch('/user')
    
  //   return response.json()
  // }
}