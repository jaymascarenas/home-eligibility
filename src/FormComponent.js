import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import logo from './logo.png';
import styled from 'styled-components';

const Image = styled.img`
  width: 300px;
  margin: 30px 0;
`;

const StyledButton = styled(Button)`
  background-color: #de3b07;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px;

  ::after {
    content: '\u25b6';
    padding-left: 35px;
  }
`;

const StyledLabel = styled(Label)`
  color: #162a39;
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledInput = styled(Input)`
  background-color: #74b3ce;
  color: #ffffff;
  height: 50px;
  border-radius: 0;
  text-align: center;

  ::placeholder {
    color: #ffffff;
  }
`;

const StyledParagraph = styled.p`
  color: #162a39;
`;

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eligibilityCode: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs

    this.setState({
      eligibilityCode: ''
    });
    console.log(this.state.eligibilityCode);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
            {' '}
            <Image src={logo} alt="Logo" className="img-fluid" />
            <Form className="text-center">
              <FormGroup>
                <StyledLabel for="eligibility-code">What is your eligibility code?</StyledLabel>
                <StyledInput
                  type="text"
                  name="eligibility"
                  id="eligibility-code"
                  value={this.state.eligibilityCode}
                  onChange={this.handleInputChange}
                  placeholder="Eligibility code"
                />
              </FormGroup>
              <StyledButton onChange={this.handleFormSubmit}>See My Savings</StyledButton>
              <StyledParagraph>(It's Free)</StyledParagraph>
            </Form>
          </Col>
          <Col>
            <p>{this.state.eligibilityCode}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormComponent;
