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
  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: 1,
      smoking: false,
      dateTime: '',
      specialRequests: '',
    },
  }

  handleChange = (propertyName, targetValue) => {
    // propertyName, the first argument, can be 'name', 'phone', etc.
    this.setState({
      reservation: {
        ...this.state.reservation,
        [propertyName]: targetValue,
        // when declaring object keys, if you want to assign its name from a variable, an argument etc.
        // you need to EVALUATE that variable, that argument. That needs square brackets
      },
    })
  }

  // render() is the only MANDATORY method in a class
  render() {
    return (
      <Row className="justify-content-center my-3">
        <Col md={6} className="text-center">
          <h2>Book your table NOW!</h2>
          <Form className="mt-3">
            <Form.Group>
              <Form.Label>Your name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert your name"
                value={this.state.reservation.name}
                onChange={
                  // from here, I'll need to set the state
                  // I need from here to change the name property into the reservation obj
                  // into the state
                  (e) =>
                    // this.setState({
                    //   reservation: {
                    //     ...this.state.reservation,
                    //     name: e.target.value, // <-- this is the character
                    //     // I'm losing the other fieds in this way!
                    //     // I should bring in also ALL the other values
                    //     // phone: this.state.reservation.phone,
                    //     // numberOfPeople: this.state.reservation.numberOfPeople,
                    //     // smoking: this.state.reservation.smoking,
                    //     // dateTime: this.state.reservation.dateTime,
                    //     // specialRequests: this.state.reservation.specialRequests,
                    //   },
                    // })
                    this.handleChange('name', e.target.value)
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Your phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Insert your phone"
                value={this.state.reservation.phone}
                onChange={(e) =>
                  //   this.setState({
                  //     reservation: {
                  //       ...this.state.reservation,
                  //       phone: e.target.value,
                  //     },
                  //   })
                  this.handleChange('phone', e.target.value)
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>How many are you?</Form.Label>
              <Form.Control
                as="select"
                value={this.state.reservation.numberOfPeople}
                onChange={(e) =>
                  //   this.setState({
                  //     reservation: {
                  //       ...this.state.reservation,
                  //       numberOfPeople: e.target.value,
                  //     },
                  //   })
                  this.handleChange('numberOfPeople', e.target.value)
                }
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              {/* CHECKBOX VERSION */}
              {/* in checkboxes 'value' can be 'true' or 'false' (not what you need) */}
              {/* let's use 'checked' instead! */}
              {/* <Form.Check
                type="checkbox"
                label="Do you smoke?"
                checked={this.state.reservation.smoking}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      smoking: e.target.checked,
                    },
                  })
                }
              /> */}

              {/* RADIO VERSION */}
              <Form.Check
                type="radio"
                label="Smoking"
                name="smoking-radio"
                checked={this.state.reservation.smoking}
                onChange={(e) => this.handleChange('smoking', e.target.checked)}
              />
              <Form.Check
                type="radio"
                label="Not Smoking"
                name="smoking-radio"
                checked={!this.state.reservation.smoking}
                onChange={(e) =>
                  this.handleChange('smoking', !e.target.checked)
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Time & Date</Form.Label>
              <Form.Control
                type="datetime-local"
                value={this.state.reservation.dateTime}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      dateTime: e.target.value,
                    },
                  })
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Any special request?</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                value={this.state.reservation.specialRequests}
                onChange={(e) =>
                  this.setState({
                    reservation: {
                      ...this.state.reservation,
                      specialRequests: e.target.value,
                    },
                  })
                }
              />
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
