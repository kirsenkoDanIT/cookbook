import React from "react";
import { Formik, Form, Field } from "formik";
import { FieldArraysForm } from "./FieldArraysForm";
import { Button, Row, Col } from "react-bootstrap";
import * as Yup from "yup";

const PostSchema = Yup.object().shape({
  title: Yup.string().required("Enter title"),
  description: Yup.string().required("Enter description")
});

export const PostForm = props => {
  const { initialValues, submitHandler } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={PostSchema}
      onSubmit={values => {
        if (props.flag && props.flag === "edit") {
          const { title, description, ingredients, method } = initialValues;
          let { archive } = values;
          archive = [...archive, { title, description, ingredients, method }];
          values = { ...values, archive };
        }
        submitHandler(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form className="d-flex flex-column align-items-center animated">
          <Row>
            <Col md="12">
              {errors.title && touched.title ? (
                <div
                  style={{ color: "red", fontSize: 10, marginBottom: "-5px" }}
                >
                  {errors.title}
                </div>
              ) : null}
              <Field
                type="text"
                name="title"
                placeholder="enter title"
                className="form-control my-1"
              />
            </Col>
            <Col md="12">
              {errors.description && touched.description ? (
                <div
                  style={{ color: "red", fontSize: 10, marginBottom: "-5px" }}
                >
                  {errors.description}
                </div>
              ) : null}
              <Field
                className="form-control my-1"
                name="description"
                placeholder="enter description"
              />
            </Col>
            <Col md="6">
              <FieldArraysForm name="ingredients" values={values} />
            </Col>
            <Col md="6">
              <FieldArraysForm name="method" values={values} />
            </Col>
          </Row>
          <div className="w-25">
            <Button
              type="submit"
              variant="outline-success"
              className="w-100 my-3"
            >
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
