import React from "react";
import { Row, Col } from "react-bootstrap";

export const PostContent = props => {
  const { title, ingredients, description, method } = props.post;
  return (
    <div className="py-3 px-2 w-100">
      <Row className="border-bottom border-dark">
        <Col sm={12}>
          <h2>{title}</h2>
        </Col>
        <Col sm={12}>
          <p className="mb-1">{description}</p>
        </Col>
      </Row>
      <Row className="border-bottom border-dark pt-3">
        <Col sm={4}>
          <h3 className="text-center">ingredients</h3>
          <ul className="m-0 p-3">
            {ingredients.map((item, index) => {
              return <li key={index} style={{ fontSize: 14 }}>{item}</li>;
            })}
          </ul>
        </Col>
        <Col sm={8}>
          <h3 className="text-center">method</h3>
          <ol className="m-0 p-3">
            {method.map((item, index) => {
              return (
                <li key={index} style={{ fontSize: 14 }}>
                  {item}
                </li>
              );
            })}
          </ol>
        </Col>
      </Row>
    </div>
  );
};
