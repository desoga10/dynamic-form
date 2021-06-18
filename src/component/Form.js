import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const FormPage = () => {
  const [fields, setFields] = useState([
    {
      id: 1,
      firstName: "",
      lastName: "",
    },

  ]);

  const handleChangeInput = (i, e) => {
    console.log(i, e.target.name);
    const values = [...fields]
    values[i][e.target.name] = e.target.value
    setFields(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("input fields", fields);
  }

  const handleAdd = (id) => {
    console.log(id + 2);
    setFields([...fields, { id: id + 2, firstName: '', lastName: '', }])
  }
  const handleSubtract = (i) => {
    console.log("clicked");
    const values = [...fields]
    values.splice(i, 1)
    setFields([...values])
  }

  return (
    <div>
      <Container className="display-flex">
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {fields.map((field, i) => (
                <div key={field.id}>
                  <Row className="g-2 mt-5">
                    <Col md>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control

                        type="text"
                        name="firstName"
                        value={field.firstName}
                        onChange={e => handleChangeInput(i, e)}
                      />
                    </Col>
                    <Col md>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control

                        type="text"
                        name="lastName"
                        value={field.lastName}
                        onChange={e => handleChangeInput(i, e)}
                      />
                    </Col>
                    <Col md>
                      <Button onClick={() => handleAdd(i)} variant="" className="mt-4">
                        <i className="fas fa-plus" ></i>
                      </Button>{" "}
                      <Button disabled={field.id === 1} onClick={() => handleSubtract(i)} variant="" className="mt-4">
                        <i className="fas fa-minus"></i>
                      </Button>{" "}
                    </Col>
                  </Row>
                </div>
              ))}

            </Form.Group>
            <Button onClick={handleSubmit} type="submit" variant="success" style={{ float: "left" }}>
              Send
            </Button>{" "}
          </Form>
          {fields.map(field =>
            <>
              <div className="m-5">
                <div key={field.id} >{field.id}</div>
                <div >{field.firstName}</div>
                <div >{field.lastName}</div>
              </div>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default FormPage;
