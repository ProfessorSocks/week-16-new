import React from 'react'
import Likes from './Likes'
import Dislikes from './Dislikes'




function FriendPost(props) {

  //delete function
    //need to grab url
    //need to grab id
    //need to take

  function handleDelete(e){
    let friend = e.target.friend
    props.deleteFriend(friend)
  }


  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image}></img>
      <div className='friendbox'>
        <div className='friendboxleft'>
          <p>Birthday :{props.birthday}.</p>
          <p>Likes:</p>
          {props.likes?.map((like)=> (
            <Likes like={like}/>
          ))}
        </div>
        <div className='friendboxright'>
          <p>Age: {props.age}</p>
          <p>Dislikes:</p>
          {props.dislikes?.map((dislike)=> (
            <Dislikes dislike={dislike}/>
          ))}
        </div>
      </div>
      <button id={`${props.id}`} friend={props.id} onClick={handleDelete}>delete</button>
    </div>
    
  )
}

export default FriendPost