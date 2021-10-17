import axios from "axios";
import { Context } from "..";
import eCard from "../../Entities/eCard";

export const loadAdminCards = async (context: Context) => {
  const cards = (await context.effects.api.getAdminCards()).data;
  console.log(`cards`, cards);
  context.state.adminCards = cards;
};

export const loginAdmin = async (
  context: Context,
  data: { username: string; password: string }
) => {
  try {
    const { token, role } = (await context.effects.api.adminLogin(data)).data;
    if (!axios.defaults.headers) return;
    //@ts-ignore
    axios.defaults.headers.common.auth = token;
    context.state.login = { token, role };
  } catch (error) {
    console.log(`error`, error);
    context.state.login = { error: "Could not log in" };
  }
};

export const saveCardSuggestion = async (context: Context, card: eCard) => {
  try {
    const answer = (await context.effects.api.saveCardSuggestion(card)).data;
    if (answer) {
      // TODO: Celebrate
    }
  } catch (error) {
    console.log(error);
  }
};

export const suggestCardDeletion = async (context: Context, id: number) => {
  try {
    const answer = (await context.effects.api.suggestCardDeletion(id)).data;
    console.log(`deleting:`, id);
  } catch (error) {
    console.log(`error`, error);
  }
};

export const getCardEdits = async (context: Context) => {
  try {
    const edits = (await context.effects.api.getAdminEdits()).data;
    context.state.cardEdits = edits;
  } catch (error) {
    console.log(`error`, error);
  }
};

export const createUser = async (
  context: Context,
  user: { username: string; password: string }
) => {
  try {
    return (await context.effects.api.createUser(user)).data;
  } catch (error) {
    console.log(error);
  }
};
