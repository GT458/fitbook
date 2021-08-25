import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import { modalErrorsReducer } from "./modal_errors_reducer";
const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  modal: modalErrorsReducer,
  
});

export default errorsReducer;