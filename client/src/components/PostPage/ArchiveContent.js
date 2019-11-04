import React from "react";
import { Button, Accordion, Col } from "react-bootstrap";
import { PostContent } from "./PostContent";

export const ArchiveContent = props => {
  const { archive } = props;

  return (
    <Col md={12} className="py-3">
      <h3 className="text-center">Archives</h3>
      <Accordion >
        {archive.map((item, index) => {
          return (
            <div key={index} >
              <Accordion.Toggle as={Button} variant="link" eventKey={index} className="w-100 bg-light my-1">
                Archive {index + 1}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index}>
                <PostContent post={item} />
              </Accordion.Collapse>
            </div>
          );
        })}
      </Accordion>
    </Col>
  );
};
