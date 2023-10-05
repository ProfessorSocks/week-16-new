import React from 'react'
import CatCard from './CatCard'

function Gallary() {

    const showCats = cats.map((cat) => <CatCard cat={cat}/>)

  return (
    <div>Gallary</div>
  )
}

export default Gallary