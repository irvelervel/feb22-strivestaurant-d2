// this will be a component for booking a table in Strivestaurant
// it will generate a form that the user can submit to an API

import { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

// do I need a state object in this component? it's a form, so YES I do

// reservation properties:
// name <-- string
// phone <-- string | number
// numberOfPeople <-- string | number
// smoking <-- boolean
// dateTime <-- string
// specialRequests <-- string

class ReservationForm extends Component {
  // render() is the only MANDATORY method in a clas
  render() {
    return (
      <Row className="justify-content-center my-3">
        <Col md={6} className="text-center">
          <h2>Book your table NOW!</h2>
          <Form className="mt-3">
            <Form.Group>
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" placeholder="Insert your name" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group>
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default ReservationForm
