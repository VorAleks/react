import { errorGitdata, getGitdata, loadingGitdata } from "../../actions/actions"
import { ERROR_GITDATA, GET_GITDATA, LOADING_GITDATA } from "../../actions/actionTypes"


const initialState = {
  gitdata: [],
  loading: false,
  error: null
}

export const gitdataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_GITDATA:
      return {
        ...state,
        loading: true,
        error: null
      }
    case GET_GITDATA:
      return {
        ...state,
        gitdata: action.payload,
        loading: false
      }
    case ERROR_GITDATA:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    
    default:
        return state
  }
}

export const loadGitdata = () => {
  return async dispatch => {
    dispatch(loadingGitdata());
    try {
      const respons = await fetch('https://api.github.com/gists/public');
      const json = await respons.json();
      dispatch(getGitdata(json))
    } catch(e) {
      dispatch(errorGitdata(e.message))
    }
  }
}