import { ADD_CHAT, DELETE_CHAT } from "../../actions/actionTypes"

const initialState = {
  chats: [
    {
      id:1,
      name: 'Alex'
    },
    {
      id:2,
      name: 'Anna'
    }
  ]
}

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload]
      }
    
    case DELETE_CHAT:
      return {
        ...state,
        chats: state.chats.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}


