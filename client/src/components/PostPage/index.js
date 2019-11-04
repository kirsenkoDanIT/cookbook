import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";

import { fetchPost, deletePost, clearMsg } from "../../store/actions";
import { PostContent } from "./PostContent";
import { ArchiveContent } from "./ArchiveContent";
import { Preloader } from "../";

const mapStateToProps = state => ({
  post: state.postReducer.post,
  msg: state.postReducer.msg,
  errMsg: state.postReducer.errMsg
});

export const PostPage = connect(
  mapStateToProps,
  { fetchPost, deletePost, clearMsg }
)(props => {
  const { fetchPost, post, deletePost, msg, clearMsg, errMsg } = props;
  const { _id } = props.location.state;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost(_id);
    setTimeout(() => setLoading(false), 1000);
    if (errMsg) {
      alert("Something went wrong, try again");
    }
  }, [fetchPost, _id, errMsg]);

  const onDeleteHandler = () => {
    return deletePost(_id);
  };

  clearMsg();

  if (msg && msg.msg === "deleted") {
    return <Redirect to="/" />;
  }

  const preloader = loading ? <Preloader /> : null;
  const content = !loading ? (
    <Row className="py-3 px-2 animated">
      <PostContent post={post} />
      <Col sm={6} className="ml-auto text-right py-2">
        <p>Created: {post.date.slice(0, 10)}</p>
      </Col>
      <Col md={8} className="text-center m-auto">
        <NavLink
          to={{ pathname: `/edit`, state: { post } }}
          className="text-decoration-none"
        >
          <Button variant="outline-dark" className="w-25 mx-3">
            Edit
          </Button>
        </NavLink>
        <Button
          variant="outline-danger"
          className="w-25 mx-3"
          onClick={onDeleteHandler}
        >
          Delete
        </Button>
      </Col>
      {post.archive.length ? <ArchiveContent archive={post.archive} /> : null}
    </Row>
  ) : null;

  return (
    <>
      {preloader}
      {content}
    </>
  );
});
