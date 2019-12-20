import React from 'react'
import Button from 'react-bootstrap/Button'
import donationAmount from '../../utils/donationAmounts.data';

import { Row, Col } from 'react-bootstrap'

const DonationButton=(donate,donation)=>{
    return (
        <div>
            <Row>
                {donationAmount.map((donation,index)=> {
                    return (
                        <div key={index}>
                            <Col>
                                <Button key={index} onClick={()=> this.donate()}>${donation}</Button>
                            </Col>
                        </div>
                    )
                })}
            </Row>
            <br />
        </div>
    )
}

export default DonationButton;
