import { Context } from "..";

export const loadAdminCards = async (context: Context) => {
  const cards = (await context.effects.api.getAdminCards()).data;
  context.state.adminCards = cards;
  context.actions.game.shuffleDeck(cards);
}
export const loginAdmin = async (context: Context, data: {username:string, password:string} ) => {
  const loginResult = (await context.effects.api.adminLogin(data)).data;
  // context.state.loggedIn = true;
}