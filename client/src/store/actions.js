import * as CONST from "./constants.js";

export const fetchAllPosts = () => ({
  type: CONST.FETCH_ALL_POSTS
});

export const fetchPost = id => ({
  type: CONST.FETCH_POST,
  id
});

export const createPost = post => ({
  type: CONST.CREATE_POST,
  post
});

export const editPost = post => ({
  type: CONST.EDIT_POST,
  post
});

export const deletePost = id => ({
  type: CONST.DELETE_POST,
  id
});

export const clearMsg = () => ({
  type: CONST.CLEAR_MSG
});

export const clearPosts = () => ({
  type: CONST.CLEAR_POSTS
});

