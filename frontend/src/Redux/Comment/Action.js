import api from "@/config/api";
import * as actionTypes from "./ActionTypes";

export const createComment = (commentData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_COMMENT_REQUEST });
    try {
      const res = await api.post(`/api/comments`, commentData);
      console.log("comment created", res.data);
      dispatch({
        type: actionTypes.CREATE_COMMENT_SUCCESS,
        comment: res.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: actionTypes.CREATE_COMMENT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const deleteComment = (commentId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_COMMENT_REQUEST });
    try {
      const res = await api.delete(`/api/comments/${commentId}`);
      console.log("comment created", res.data);
      dispatch({
        type: actionTypes.DELETE_COMMENT_SUCCESS,
        commentId,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: actionTypes.DELETE_COMMENT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchComment = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_COMMENT_REQUEST });
    try {
      const res = await api.get(`/api/comments/${issueId}`);
      console.log("comment created", res.data);
      dispatch({
        type: actionTypes.FETCH_COMMENT_SUCCESS,
        comment: res.data,
      });
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: actionTypes.FETCH_COMMENT_FAILURE,
        error: error.message,
      });
    }
  };
};