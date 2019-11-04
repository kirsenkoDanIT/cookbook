import axios from "axios";
import * as CONST from "./constants.js";
import { take, put, all } from "redux-saga/effects";

function* fetchAllPostsSaga() {
  while (true) {
    try {
      yield take(CONST.FETCH_ALL_POSTS);
      const response = yield axios.get("/posts");
      yield put({
        type: CONST.FETCH_ALL_POSTS_SUCCESS,
        payload: { posts: response.data }
      });
    } catch (error) {
      yield put({
        type: CONST.FETCH_ALL_POSTS_FAIL,
        payload: error.response.data.errMsg
      });
      console.log(error);
    }
  }
}

function* fetchPostSaga() {
  while (true) {
    try {
      const { id } = yield take(CONST.FETCH_POST);
      const response = yield axios.get(`/posts/${id}`);
      yield put({
        type: CONST.FETCH_POST_SUCCESS,
        payload: { post: response.data }
      });
    } catch (error) {
      yield put({
        type: CONST.FETCH_POST_FAIL,
        payload: error.response.data.errMsg
      });
      console.log(error);
    }
  }
}

function* createPostSaga() {
  while (true) {
    try {
      const { post } = yield take(CONST.CREATE_POST);
      const response = yield axios.post(`/posts`, post);
      yield put({
        type: CONST.CREATE_POST_SUCCESS,
        payload: { msg: response.data }
      });
    } catch (error) {
      yield put({
        type: CONST.CREATE_POST_FAIL,
        payload: error.response.data.errMsg
      });
      console.log(error);
    }
  }
}

function* editPostSaga() {
  while (true) {
    try {
      const { post } = yield take(CONST.EDIT_POST);
      const response = yield axios.put(`/posts`, post);
      yield put({
        type: CONST.EDIT_POST_SUCCESS,
        payload: { msg: response.data }
      });
    } catch (error) {
      yield put({
        type: CONST.EDIT_POST_FAIL,
        payload: error.response.data.errMsg
      });
      console.log(error);
    }
  }
}

function* deletePostSaga() {
  while (true) {
    try {
      const { id } = yield take(CONST.DELETE_POST);
      const response = yield axios.delete(`/posts/${id}`);
      yield put({
        type: CONST.DELETE_POST_SUCCESS,
        payload: { msg: response.data }
      });
    } catch (error) {
      yield put({
        type: CONST.DELETE_POST_FAIL,
        payload: error.response.data.errMsg
      });
      console.log(error);
    }
  }
}

export function* rootSaga() {
  yield all([
    fetchAllPostsSaga(),
    fetchPostSaga(),
    createPostSaga(),
    editPostSaga(),
    deletePostSaga()
  ]);
}
