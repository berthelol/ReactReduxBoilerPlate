import { START_USER } from "Redux/actionType";

const INITIAL_STATE = { userStatus: null };

export default function(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case START_USER:
      return { ...state, userStatus: payload };
    default:
      return state;
  }
}
