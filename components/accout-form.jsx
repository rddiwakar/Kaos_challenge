import React from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import styled from "styled-components";
const FormContainer = styled.div`
  padding: 10px 24px;
  h2 {
    font-size: 18px;
    font-weight: 700;
  }
  & .nameContent,
  .ifscContent {
    padding: 10px 0;
  }
  & .inputField {
    width:380px;
    height: 60px;
    border: 0.5px solid black;
    border-radius: 16px;
    outline: none;
    padding-left: 10px;
  }
  & .singleIfsc {
    width: 100%;
    & .inputIfsc {
      width: 340px;
    }
    & .deleteBtn {
      width: 40px;
      height: 40px;
      background: #1d1d1f;
      color: white;
      border-radius: 50%;
    }
    & .secondary {
      background: #1d1d1f;
      color: white;
      margin: 10px 0;
      border-radius: 12px;
      padding: 6px 20px;
    }
  }
  & .submit {
    background: #1d1d1f;
    color: white;
    padding: 14px 32px;
    border-radius: 16px;
  }
`;

const AccountForm = () => {
  const initialValues = {
    name: "",
    ifscCodes: [
      {
        ifscCode: ""
      }
    ]
  };
  const handleSubmit = (values) => {
    console.log(values);
    const name = values.name;
    const ifscs = values.ifscCodes.map((item) => item.ifscCode);
    console.log(name, ifscs);
    
  };
  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values }) => (
          <Form>
            <div className="nameContent">
              <h2>Name</h2>
              <Field
                name="name"
                placeholder="Enter your name"
                className="inputField"
              />
            </div>
            <div className="ifscContent">
              <h2>IFSC Codes</h2>
              <FieldArray name="ifscCodes">
                {({ insert, remove, push }) => (
                  <div className="singleIfsc">
                    {values.ifscCodes.length > 0 &&
                      values.ifscCodes.map((ifsc, index) => (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                          }}
                          key={index}
                        >
                          <div className="col">
                            <Field
                              name={`ifscCodes.${index}.ifscCode`}
                              placeholder="Enter your Ifsc Code"
                              type="text"
                              className="inputField inputIfsc"
                            />
                            <ErrorMessage
                              name={`ifscCodes.${index}.ifscCode`}
                              component="div"
                              className="field-error"
                            />
                          </div>
                          <div className="col">
                            <button
                              type="button"
                              className="deleteBtn"
                              onClick={() => remove(index)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="button"
                      className="secondary"
                      onClick={() => push({ ifscCode: "" })}
                    >
                      Add IFSC
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
            <button type="submit" className="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default AccountForm;
