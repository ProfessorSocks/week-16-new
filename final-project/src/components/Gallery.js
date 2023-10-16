import React, { useEffect, useState } from 'react'
import AddGalleryForm from './AddGalleryForm'
import GalleryPost from './GalleryPost'


function Gallery() {
//add fetch to map through gallery post
  const GALLERY_END = 'https://65148aacdc3282a6a3cd4724.mockapi.io/images'

  const [data, setData] = useState([])

  const getImages = async () => {
    try{
      const resp = await fetch(GALLERY_END);
      const data = await resp.json();
      return setData(data);
    }catch(e){
      console.log('getFriends had an error:', e);
    }
  }
  useEffect(()=>{
    getImages()
  }, [])


//in {} map out gallerypost using props look at week 15 async awaits
  return (
    <div>
      {data.map((image)=> (
        <GalleryPost image={image.image} caption={image.caption}  />
      ))}
    </div>
  )
}

export default Gallery