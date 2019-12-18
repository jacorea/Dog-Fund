import React from 'react'
import { Jumbotron, Image } from 'react-bootstrap'
import './header.styles.css';

import Dog from '../../assets/Guidedog-Logo.png'


const Header = () => {
    return (
        <div>
            <Jumbotron>
            <Image  src={Dog} />
            </Jumbotron>
        </div>
    )
}

export default Header
