import { combineReducers, createStore } from "redux";

import { messagesReducer } from "./reducers/messagesReducer/messagesReducer";
import { chatsReducer } from "./reducers/chatsReducer/chatsReducer";

export const store = createStore(combineReducers({
  chats: chatsReducer,
  messages: messagesReducer
}))