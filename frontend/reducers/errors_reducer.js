import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import { modalErrorsReducer } from "./error_reducers/modal_errors_reducer";
import { postErrorsReducer } from "./error_reducers/post_errors_reducer";
import { commentErrorsReducer } from "./error_reducers/comment_errors_reducer";
import { likeErrorsReducer } from "./error_reducers/like_error_reducer";
import { friendRequestErrorsReducer } from "./error_reducers/friend_request_errors_reducer";
import { friendErrorsReducer } from "./error_reducers/friend_errors_reducer";
import { userErrorsReducer } from "./error_reducers/user_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  user: userErrorsReducer,
  modal: modalErrorsReducer,
  post: postErrorsReducer,
  comment: commentErrorsReducer,
  like: likeErrorsReducer,
  friendRequest: friendRequestErrorsReducer,
  friend: friendErrorsReducer

});

export default errorsReducer;