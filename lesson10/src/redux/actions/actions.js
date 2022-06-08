import { auth } from "../../firebase";
import * as types from "./actionTypes"

export const loadingGitdata = () => ({
  type: types.LOADING_GITDATA ,
  });
export const getGitdata = (data) => ({
  type: types.GET_GITDATA,
  payload: data,
  });
export const errorGitdata = (err) => ({
  type: types.ERROR_GITDATA,
  payload: err,
  });
  
export const loginStart = () => ({
  type: types.LOGIN_START ,
  });
export const loginSuccess = (data) => ({
  type: types.LOGIN_SUCCESS,
  payload: data,
  });
export const loginError = (err) => ({
  type: types.LOGIN_ERROR,
  payload: err,
  });

export const registerStart = () => ({
  type: types.REGISTER_START ,
  });
export const registerSuccess = (data) => ({
  type: types.REGISTER_SUCCESS,
  payload: data,
  });
export const registerError = (err) => ({
  type: types.REGISTER_ERROR,
  payload: err,
  });

export const logoutStart = () => ({
  type: types.LOGOUT_START,
  });
export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
    });
export const logoutError = () => ({
  type: types.LOGOUT_ERROR,
  });

export const registerInitiate = (email, password, displayName) => {
  return (dispatch) => {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user.updateProfile({
          displayName
        })
        dispatch(registerSuccess(user))
      })
      .catch((err) => dispatch(registerError(err.message)))
  }
}

export const loginInitiate = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        dispatch(loginSuccess(user))
      })
      .catch((err) => dispatch(loginError(err.wessage)))
  } 
}

export const logoutInitiate = () => {
  return (dispatch) => {
    dispatch(logoutStart());
    auth
      .signOut()
      .then(() => {
        dispatch(logoutSuccess())
      })
      .catch((err) => dispatch(logoutError(err.wessage)))
  } 
}