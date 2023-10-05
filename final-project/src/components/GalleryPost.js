import React from 'react'

function GalleryPost(props) {
  return (
    <div>
      <img src={props.image}/>
      <p>{props.caption}</p>
    </div>
  )
}

export default GalleryPost