import { combineReducers } from "redux";
import authDriver from "./authDriver.js";
import authClient from "./authClient.js";
export const reducers = combineReducers({ authDriver, authClient });
