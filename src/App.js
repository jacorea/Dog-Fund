import React, { Component } from 'react';
import './App.css';
import DonationButton from './components/donation-button/donation-button.component';
import Header from './components/header/header.component.jsx';
import Address from './components/address/Address.component';

import { FormGroup, FormLabel, FormControl} from 'react-bootstrap';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state= {
      donation: '',
      firstName: '',
      lastName: '',
      companyName: '',
      billingAddress: {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
      }
    }
  }


  handleDonation = (donation) => {
    this.setState({donation: donation })
  }

  handleChange= (event)=> {
    let {donation} = this.state;
    donation = event.target.value;
    this.setState({donation: donation })
  }

  

  render() {
    let { donation } = this.state;

    return (
      <div>
        <div className="section">
          <Header />
        </div>
        <div className="container">
          <h3>Donation Amount</h3>
          <hr />
          <DonationButton donate={this.handleDonation} donation={donation} />
        </div>
        <div className="container">
          <FormGroup>
            <FormLabel>OTHER AMOUNT</FormLabel>
              <FormControl 
                type='number'
                name="donation"
                onChange={this.handleChange}
                value={donation}
              />
          </FormGroup>
          <hr />
          <Address />
          <hr />
        </div>
      </div>
    );
  }
}

export default App;
