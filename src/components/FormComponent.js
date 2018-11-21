import React, { Component } from 'react';
import queryString from 'query-string';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import logo from '../logo.png';
import styled from 'styled-components';

const parsed = queryString.parse(window.location.search);
console.log(parsed);

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
  width: 100%;
  :hover {
    background-color: #f43e05;
  }

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
  width: 200px;
  height: 50px;
  border-radius: 0;
  text-align: center;
  margin: 0 auto;

  ::placeholder {
    color: #ffffff;
  }
`;

const StyledParagraph = styled.p`
  color: ${props => props.autoFillColor || '#162a39'};
  margin: ${props => props.autoFillMargin || '10px 0'};
`;

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eligibility: parsed.e || ''
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
      eligibility: ''
    });
    console.log(this.state.eligibility);
  };
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }} className="text-center">
            {' '}
            <Image src={logo} alt="Logo" className="img-fluid" />
            <Form className="text-center">
              <FormGroup>
                <StyledLabel for="eligibility-code">What is your eligibility code?</StyledLabel>
                <StyledInput
                  type="text"
                  name="eligibility"
                  id="eligibility-code"
                  value={this.state.eligibility}
                  onChange={this.handleInputChange}
                  placeholder="Eligibility code"
                />
                <StyledParagraph autoFillColor="#ff0000" autoFillMargin="0">
                  autofilled from email
                </StyledParagraph>
              </FormGroup>
              <StyledButton onChange={this.handleFormSubmit}>See My Savings</StyledButton>
              <StyledParagraph>(It's Free)</StyledParagraph>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>This is the current eligibility state: {this.state.eligibility}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormComponent;
