import { combineReducers } from "redux";
import * as CONST from "./constants.js";

const initialState = {
  post: null,
  posts: null,
  msg: null,
  errMsg: null
};

function postReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CONST.FETCH_POST_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case CONST.FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case CONST.DELETE_POST_SUCCESS:
    case CONST.EDIT_POST_SUCCESS:
    case CONST.CREATE_POST_SUCCESS:
      return {
        ...state,
        ...payload
      };
    case CONST.FETCH_ALL_POSTS_FAIL:
    case CONST.FETCH_POST_FAIL:
    case CONST.CREATE_POST_FAIL:
    case CONST.EDIT_POST_FAIL:
    case CONST.DELETE_POST_FAIL:
      return {
        ...state,
        errMsg: payload
      };
    case CONST.CLEAR_MSG:
      return {
        ...state,
        msg: null,
        errMsg: null
      };
    case CONST.CLEAR_POSTS:
      return {
        ...state,
        posts: null,
        post: null
      };

    default:
      return state;
  }
}

export const reducer = combineReducers({
  postReducer
});
