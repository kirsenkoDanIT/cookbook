import React from "react";
import { connect } from "react-redux";
import { PostForm } from "../";
import { createPost, clearMsg } from "../../store/actions";
import { Redirect } from "react-router-dom";

const mapStateToProps = state => ({
  msg: state.postReducer.msg,
  errMsg: state.postReducer.errMsg
});

export const PostCreationPage = connect(
  mapStateToProps,
  { createPost, clearMsg }
)(props => {
  const { msg, createPost, clearMsg,errMsg } = props;
  const initialValues = {
    title: "",
    description: "",
    ingredients: [],
    method: []
  };

  clearMsg();

  if (msg && msg.msg === "created") {
    return <Redirect to="/" />;
  }

  if (errMsg) {
    alert('Something went wrong, try again')
  }

  return (
    <>
      <h2 className="display-4 text-center animated">Add recipe</h2>
      <PostForm initialValues={initialValues} submitHandler={createPost} />
    </>
  );
});
