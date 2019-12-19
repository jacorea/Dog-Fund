import React, { Component } from 'react'

import {FormGroup, FormLabel, FormControl, Row, Col } from 'react-bootstrap';

import DonationButton from '../donation-button/donation-button.component';

export class DonationAmountForm extends Component {
  render() {
  return (
      <div>
        <div className="container">
          <div className="title">
              <h3>{this.props.title}</h3>
              <hr />
          </div>
          <div>
            <Row>
              <Col>
                <DonationButton />
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col md={4} lg={4}>
                <FormGroup>
                  <FormLabel>OTHER AMOUNT</FormLabel>
                    <FormControl 
                      type='number'
                      name="donation"
                      onChange={this.props.handleDonation()}
                      value={this.props.donation}
                    />
                </FormGroup>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default DonationAmountForm;
