import { AUTH } from "../constants/actionTypes";
import * as api from "../api/indexClient.js";

export const signinClient = (formDataClient, history) => async (dispatch) => {
  try {
    const { data } = await api.signInClient(formDataClient);

    dispatch({ type: AUTH, data });

    history.push("/home/client");
  } catch (error) {
    console.log(error);
  }
};

export const signupClient = (formDataClient, history) => async (dispatch) => {
  try {
    const { data } = await api.signUpClient(formDataClient);

    dispatch({ type: AUTH, data });

    history.push("/home/client");
  } catch (error) {
    console.log(error);
  }
};
