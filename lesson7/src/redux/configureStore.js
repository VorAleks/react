import { applyMiddleware, combineReducers, createStore } from "redux";

import { messagesReducer } from "./reducers/messagesReducer/messagesReducer";
import { chatsReducer } from "./reducers/chatsReducer/chatsReducer";

import { createLogger } from 'redux-logger'

const time = store => next => action => {
  const delay = action?.meta?.delay;
  if (!delay) {
    return next(action)
  }

  const timeOut = setTimeout(() => next(action), delay)

  return () => {
    clearTimeout(timeOut)
  }
}

const logger = createLogger({
    duration: true,
    timestamp: false,
    colors:  {
      title: () => 'inherit',
      prevState: () => '#000',
      action: () => 'red',
      nextState: () => 'green',
      error: () => '#F20404',
    }
})

export const store = createStore(combineReducers({
  chats: chatsReducer,
  messages: messagesReducer
}), applyMiddleware(logger, time))