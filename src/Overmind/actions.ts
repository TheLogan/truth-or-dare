import { Context } from '.'

export const getCards = async (context: Context) => {
  context.state.cards = (await context.effects.api.getCards()).data;
}

// export const noArgAction = (context: Context) => {
//   // actions.noArgAction()
// }

// export const argAction = (context: Context, value: string) => {
//   // actions.argAction("foo"), requires "string"
// }

// export const noArgWithReturnTypeAction = (context: Context) => {
//   // actions.noArgWithReturnTypeAction(), with return type "string"
//   return 'foo'
// }

// export const argWithReturnTypeAction = (context: Context, value: string) => {
//   // actions.argWithReturnTypeAction("foo"), requires "string" and returns "string"
//   return value + '!!!'
// }

// // The onInitialize action
// export const onInitializeOvermind = (context: Context, instance: Overmind<Context>) => {

// }