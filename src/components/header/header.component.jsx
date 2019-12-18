import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import './header.styles.css';

let styles ={
    "background-image":"http://worldkings.org/Userfiles/Upload/images/Yale.jpg"
  }

const Header = () => {
    return (
        <div>
            <Jumbotron styles={styles}>
                <h1>Dog Foundation</h1>
            </Jumbotron>
        </div>
    )
}

export default Header
