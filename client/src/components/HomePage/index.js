import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Card, CardColumns } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { fetchAllPosts, clearPosts, clearMsg } from "../../store/actions";
import { Preloader } from "../";

const mapStateToProps = state => ({
  posts: state.postReducer.posts,
  errMsg: state.postReducer.errMsg
});

export const HomePage = connect(
  mapStateToProps,
  { fetchAllPosts, clearPosts, clearMsg }
)(props => {
  const { fetchAllPosts, posts, clearPosts, clearMsg, errMsg } = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    clearMsg();
    fetchAllPosts();
    setTimeout(() => setLoading(false), 1000);
    if (errMsg) {
      alert("Something went wrong, try again");
    }
  }, [fetchAllPosts, clearMsg, errMsg]);

  const preloader = loading ? <Preloader /> : null;
  const content = !loading ? (
    <CardColumns className="animated py-3">
      {posts.map((item, index) => {
        const { title, description, _id, date } = item;
        const slug = title
          .split(" ")
          .join("-")
          .toLowerCase();
        return (
          <Card className="m-2" key={index} md={6}>
            <Card.Header className="font-weight-bolder">{title}</Card.Header>
            <Card.Body>
              <Card.Text style={{ fontSize: 13 }}>{description}</Card.Text>
              <Card.Text className="text-right m-0" style={{ fontSize: 10 }}>
                Created: {date.slice(0, 10)}
              </Card.Text>
              <NavLink
                to={{ pathname: `/posts/${slug}`, state: { _id } }}
                className="text-decoration-none"
                onClick={clearPosts}
              >
                Read more...
              </NavLink>
            </Card.Body>
          </Card>
        );
      })}
    </CardColumns>
  ) : null;

  return (
    <>
      {preloader}
      {content}
    </>
  );
});
