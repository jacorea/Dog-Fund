import React from 'react'
import Button from 'react-bootstrap/Button'
import donationAmount from '../../utils/donationAmounts.data';

const DonationButton=(donate,donation)=>{
    console.log(donate)
    
    return (
        <div>
            {donationAmount.map((donation,index)=> {
                return (
                    <div>
                        <Button key={index} onClick={()=> this.donate()}>${donation}</Button>
                    </div>
                )
            })}
        </div>
    )
}

export default DonationButton;
