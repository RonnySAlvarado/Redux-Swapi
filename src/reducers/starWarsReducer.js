import { FETCH, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ""
};

export const charsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        fetching: true
      };
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload
      };
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
