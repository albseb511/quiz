import * as authConstants from "./actionTypes";

const loginUserRequest = (payload) => ({
  type: authConstants.LOGIN_USER_REQUEST,
  payload,
});

const loginUserSuccess = (payload) => ({
  type: authConstants.LOGIN_USER_SUCCESS,
  payload,
});

const loginUserFailure = (payload) => ({
  type: authConstants.LOGIN_USER_FAILURE,
  payload,
});

const loginUser = (payload) => ({
  type: authConstants.LOGIN_USER_REQUEST,
  payload,
});

const registerUserRequest = (payload) => ({
  type: authConstants.REGISTER_USER_REQUEST,
  payload,
});

const registerUserSuccess = (payload) => ({
  type: authConstants.REGISTER_USER_SUCCESS,
  payload,
});

const registerUserFailure = (payload) => ({
  type: authConstants.REGISTER_USER_FAILURE,
  payload,
});

const registerUser = (payload) => ({
  type: authConstants.LOGIN_USER_REQUEST,
  payload,
});

const logoutUserSuccess = (payload) => ({
  type: authConstants.LOGOUT_USER_SUCCESS,
  payload,
});

const createUserSuccess = (payload) => ({
  type: authConstants.CREATE_USER_SUCCESS,
  payload,
});

const createUserFailure = (payload) => ({
  type: authConstants.CREATE_USER_FAILURE,
  payload,
});

export {
  loginUser,
  loginUserSuccess,
  logoutUserSuccess,
  registerUser,
  createUserSuccess,
  createUserFailure,
};
