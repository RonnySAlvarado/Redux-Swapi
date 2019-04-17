import axios from "axios";

export const FETCH = "FETCH";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const loadCharacters = () => dispatch => {
  dispatch({ type: FETCH });
  axios
    .get("https://swapi.co/api/people")
    .then(res => dispatch({ type: SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FAILURE, payload: err }));
};
