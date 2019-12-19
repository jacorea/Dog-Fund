import React, { Component } from 'react';
import './App.css';
import DonationButton from './components/donation-button/donation-button.component';
import Header from './components/header/header.component.jsx';
import Address from './components/address/Address.component';
import DonationAmountForm from './components/donation-amount-form/donation-amount-form.component'

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
        <DonationAmountForm title="Donation Amount" donation={donation} handleDonation={()=> this.handleChange} />
        <div className="container">
          <Address title="Contact Info" />
          <Address title="Billing Address" />
        </div>
      </div>
    );
  }
}

export default App;
