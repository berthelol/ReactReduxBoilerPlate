import { START_USER } from "Redux/actionType";

export function startUser() {
  return dispatch => {
    dispatch({
      type: START_USER,
      payload: "Start"
    });
  };
}