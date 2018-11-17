import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    console.log(this.state.email);
    this.setState({
      email: ""
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            {" "}
            <Form>
              <FormGroup>
                <Label for="email-address">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  id="email-address"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Email Address"
                />
              </FormGroup>
              <Button color="danger" onChange={this.handleFormSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <p>{this.state.email}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormComponent;
