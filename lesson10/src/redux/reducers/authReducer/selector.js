export const authSelector = state => state.auth;
export const authstartSelector = state => state.auth.loading;
export const authsuccessSelector = state => state.auth.currentUser;
export const autherrorSelector = state => state.auth.error;