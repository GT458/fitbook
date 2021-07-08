import { RECEIVE_CURRENT_USER } from "./session_actions";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

