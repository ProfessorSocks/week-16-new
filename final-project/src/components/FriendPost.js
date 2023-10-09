import React from 'react'
import Likes from './Likes'
import Dislikes from './Dislikes'




function FriendPost(props) {


  const { data } = props;
  //delete function
    //need to grab url
    //need to grab id
    //need to take

  function handleDelete(e){
    let friend = e.target.friend
    console.log(friend)
    deleteFriend(friend)
  }

  
  
  const deleteFriend = async (key) => {
    try {
      const resp = await fetch(`${data}/${key}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // handle response accordingly
    } catch (e) {
      console.log(`deleteFriend had an error: ${e}`)
    }
  };



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
      <button id={`${props.key}`} friend={props.key} onClick={() => deleteFriend(props.key)}>delete</button>
    </div>
    
  )
}

export default FriendPost