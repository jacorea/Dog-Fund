import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component.jsx';
import Address from './components/address/Address.component';
import DonationAmountForm from './components/donation-amount-form/donation-amount-form.component'


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
          <Address title="Contact Info" formTitle="homeAddress"/>
          <Address title="Billing Address" formTitle="billingAddress" />
        </div>
      </div>
    );
  }
}

export default App;
