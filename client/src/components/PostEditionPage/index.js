import React from "react";
import { connect } from "react-redux";
import { PostForm } from "../";
import { editPost, clearMsg } from "../../store/actions";

const mapStateToProps = state => ({
  msg: state.postReducer.msg,
  errMsg: state.postReducer.errMsg
});

export const PostEditionPage = connect(
  mapStateToProps,
  { editPost, clearMsg }
)(props => {
  const { msg, editPost, clearMsg, errMsg } = props;
  const post = props.location.state.post;

  clearMsg();

  if (msg && msg.msg === "updated") {
    props.history.goBack();
  }
  if (errMsg) {
    alert("Something went wrong, try again");
  }

  return (
    <>
      <h2 className="display-4 text-center animated">Edit recipe</h2>
      <PostForm initialValues={post} submitHandler={editPost} flag="edit" />
    </>
  );
});
