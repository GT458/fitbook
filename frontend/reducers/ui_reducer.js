import { modalReducer } from "./modal_reducer";

import { combineReducers } from "redux";

export const uiReducer = combineReducers({
  modal: modalReducer
})