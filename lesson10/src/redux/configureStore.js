import { applyMiddleware, combineReducers, createStore } from "redux";

import { messagesReducer } from "./reducers/messagesReducer/messagesReducer";
import { chatsReducer } from "./reducers/chatsReducer/chatsReducer";
import { gitdataReducer } from "./reducers/gitdataReducer/gitdataReducer";
import { authReducer } from "./reducers/authReducer/authReducer";

import { createLogger } from 'redux-logger'

import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

import thunk from "redux-thunk";



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

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const rootReducer = combineReducers({
//   chats: chatsReducer,
//   messages: messagesReducer,
//   gitdata: gitdataReducer,
//   auth:authReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)
// export const store = createStore(persistedReducer, applyMiddleware(thunk, logger, time));
// export const persist = persistStore (store)

export const store = createStore(combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  gitdata: gitdataReducer,
  auth: authReducer
}), applyMiddleware(thunk, logger, time))