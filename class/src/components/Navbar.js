import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function Navbar() {
  return (
    <div>
        <Link to='/'><Button>Home</Button></Link>
        <Link to='/gallary'><Button>Gallary</Button></Link>
        <Link to='/fight'><Button>Fight</Button></Link>

    </div>
  )
}

export default Navbar