
export const loadingGitdata = () => ({
  type: 'LOADING_GITDATA',
  });
export const getGitdata = (data) => ({
  type: 'GET_GITDATA',
  payload: data,
  });
export const errorGitdata = (err) => ({
  type: 'ERROR_GITDATA',
  payload: err,
  });
  