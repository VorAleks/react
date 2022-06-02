import * as types from "../../actions/actionTypes" 

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
    case types.REGISTER_START:
    case types.LOGOUT_START:  
      return {
        ...state,
        loading: true,
        error: null
      }

    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      }
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        loading: false
      }
    case types.LOGIN_ERROR:
    case types.REGISTER_ERROR:
    case types.LOGOUT_ERROR:    
      return {
        ...state,
        error: action.payload,
        loading: false
      }

    default:
      return state
  }
}