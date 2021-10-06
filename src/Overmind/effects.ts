import axios from "axios"

export const api = {
  getCards:()=> {
    return axios.get('/cards');
  }
  // getUser: async (): Promise<User> => {
  //   const response = await fetch('/user')
    
  //   return response.json()
  // }
}