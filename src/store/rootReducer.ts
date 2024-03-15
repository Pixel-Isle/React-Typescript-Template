import { combineReducers } from "@reduxjs/toolkit";
import { getPersistConfig } from "redux-deep-persist";
import { persistReducer } from "redux-persist";
import defaultReducer from "./slice";
import storage from "./storage";

const storageKeys = {
  // This is the key for the root of the state in localstorage, you can change it to anything you want
  // you can also use different keys for different parts of the state
  // We generally use the same key for the whole state and put it in env file
  root: "U82b5$3r",
};

const rootReducer = combineReducers({
  // You can also use different keys for different parts of the state
  default: defaultReducer,
});

const config = getPersistConfig({
  storage: storage,
  key: storageKeys.root,
  // This is the whitelist, you can also use blacklist
  // This is the list of keys that you want to persist in localstorage
  // If you don't provide a whitelist, all the keys will be persisted
  //   whitelist: ["counter"],
  rootReducer,
});

export default persistReducer(config, rootReducer);
