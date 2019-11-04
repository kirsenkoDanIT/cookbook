import React from "react";
import { Field, FieldArray } from "formik";
import { Button } from "react-bootstrap";

export const FieldArraysForm = props => {
  const { name, values } = props;

  return (
    <FieldArray
      name={name}
      render={arrayHelpers => (
        <div className="d-flex flex-column ">
          {values[name].map((item, index) => (
            <div key={index} className="d-flex align-items-stretch my-1">
              <Field
                name={`${name}.${index}`}
                placeholder={name}
                className="form-control"
                required
              />
              <Button
                className="ml-1"
                variant="outline-danger"
                type="button"
                onClick={() => arrayHelpers.remove(index)}
              >
                x
              </Button>
            </div>
          ))}
          <Button
            className="my-3"
            variant="outline-secondary"
            type="button"
            onClick={() => arrayHelpers.push("")}
          >
            {`add ${name}`}
          </Button>
        </div>
      )}
    />
  );
};
