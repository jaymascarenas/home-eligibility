import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const Disclosure = styled.p`
  font-size: 12px;
  color: #000000;
  bottom: 0;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <Disclosure>
              The owner of this website is not responsible for any photographic or typographical
              errors. Subject matter within this website are copyrighted property of the owner of
              this site. This site may provide affiliate and partner links. Any service marks,
              logos, and trademarks (collectively the &rsquo;Trademarks&rsquo;) displayed are
              registered and/or unregistered Trademarks of their respective owners. This site is not
              affiliated with your current mortgage lender/servicer, HUD, VA or FHA. This website is
              not affiliated with any government agency, lender, news source or government
              organization.
            </Disclosure>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
