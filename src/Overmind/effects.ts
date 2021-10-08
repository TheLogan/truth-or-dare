import axios from "axios"

export const api = {
  getCards:()=> {
    return axios.get('https://api-ijnhh.ondigitalocean.app/api/game/cards');
  }
  // getUser: async (): Promise<User> => {
  //   const response = await fetch('/user')
    
  //   return response.json()
  // }
}