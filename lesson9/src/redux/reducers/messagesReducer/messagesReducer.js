import { DELETE_MESSAGE, ADD_MESSAGE, DELETE_MESSAGES } from "../../actions/actionTypes";


const initialState = {
  messages: [
    {
      id: 1,
      chatId: 1,
      message: 'Hi'
    },
    {
      id: 2,
      chatId: 2,
      message: 'Hello'
    },
    {
      id: 3,
      chatId: 1,
      message: 'How are you'
    },{
      id: 4,
      chatId: 2,
      message: 'Fine'
    }
  ]
}

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(item => item.id !== action.payload)
      }
      case DELETE_MESSAGES:
      return {
        ...state,
        messages: state.messages.filter(item => item.chatId !== action.payload)
      }
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    default:
      return state
  }
}