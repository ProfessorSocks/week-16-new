import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbarcam'>
        <h2>Camille West</h2>
        <Link to='/' ><Button>About</Button></Link>
        <Link to='/Gallery'><Button>Gallery</Button></Link>
        <Link to='/Friends'><Button>Friends</Button></Link>
    </div>
  )
}

export default Navbar