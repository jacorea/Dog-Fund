import React, { Component } from 'react'

import { FormGroup, Form, FormLabel,FormControl, Row, Col, } from 'react-bootstrap';

import states from '../../utils/state.data';

export class Address extends Component {
    constructor(props) {
        super(props)

        this.state = { 
                states: [],
                homeAddress: {
                firstName: '',
                lastName: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: '',
                country: ''
            }
        }
    }

    componentDidMount = () => {
        let {state} = this.state
        this.createArrayOfStates(states)
        this.setState({state: state})
      }

    createArrayOfStates = (array) => {
        let newStateArray = array.map((obj,id) => {
            return (`${obj.name} (${obj.abbreviation})`
            )
                    
        })
        this.setState({states: newStateArray})
    }

    handleChange = (event) => {
        const { homeAddress } = this.state;
        homeAddress[event.target.name] = event.target.value
        this.setState({homeAddress: homeAddress })
    }
        
    render() {
        let { firstName, lastName, address1, address2, city, state, zip, country } = this.state.homeAddress;
        let { states } = this.state;
        return (
            <div>
                <Form>
                    <h3>{this.props.title}</h3>
                    <hr />
                    <Row>
                        <Col>
                        <FormGroup  controlId="formGridFirstName">
                            <FormLabel>First Name</FormLabel>
                            <FormControl 
                                type="text"
                                name="firstName"
                                onChange={this.handleChange}
                                value={firstName}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup controlId="formGridLastName">
                            <FormLabel>Last Name</FormLabel>
                            <FormControl 
                                type="text"
                                name="lastName"
                                onChange={this.handleChange}
                                value={lastName}
                            />
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId="Address1">
                        <FormLabel>Address 1</FormLabel>
                        <FormControl 
                            type='text'
                            name="address1"
                            onChange={this.handleChange}
                            value={address1}
                        />
                    </FormGroup>

                    <FormGroup controlId="Address2">
                        <FormLabel>Address 2 (optional)</FormLabel>
                        <FormControl 
                            type='text'
                            name="address2"
                            onChange={this.handleChange}
                            value={address2}
                        />
                    </FormGroup>

                    <FormGroup controlId="Country">
                    <FormLabel>Country</FormLabel>
                        <FormControl 
                            type='text'
                            name="country"
                            onChange={this.handleChange}
                            value={country}
                        />
                    </FormGroup>

                    <Form.Row>                    
                            <FormGroup as={Col} controlId="City">
                                <FormLabel>City</FormLabel>
                                <FormControl 
                                    type='text'
                                    name="city"
                                    onChange={this.handleChange}
                                    value={city}
                                />
                            </FormGroup>
            
                            <FormGroup as={Col} controlId="States">
                            <FormLabel>State</FormLabel>
                                <FormControl
                                    as="select" 
                                    type='text'
                                    name="state"
                                    onChange={this.handleChange}
                                >
                                {states.map((state,id)=> {
                                    return (<option key={id} value={state}>{state}</option>
                                    )                                    
                                })}
                                </FormControl>
                            </FormGroup>

                            <FormGroup as={Col} controlId="Zip">
                            <FormLabel>Zip</FormLabel>
                                <FormControl 
                                    type='text'
                                    name="zip"
                                    onChange={this.handleChange}
                                    value={zip}
                                />
                            </FormGroup>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default Address;
