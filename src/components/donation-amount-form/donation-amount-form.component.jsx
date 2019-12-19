import React, { Component } from 'react'

import {FormGroup, FormLabel, FormControl } from 'react-bootstrap';

import DonationButton from '../donation-button/donation-button.component';

export class DonationAmountForm extends Component {
  render() {
    console.log(this.props);
  return (
      <div>
        <div className="container">
          <div className="title">
              <h3>{this.props.title}</h3>
              <hr />
          </div>
          <div>
            <DonationButton />
          </div>
          <div>
            <FormGroup>
              <FormLabel>OTHER AMOUNT</FormLabel>
                <FormControl 
                  type='number'
                  name="donation"
                  onChange={this.props.handleDonation()}
                  value={this.props.donation}
                />
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }
}

export default DonationAmountForm;
