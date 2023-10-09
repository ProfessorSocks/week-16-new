import React from 'react'
import Likes from './Likes'
import Dislikes from './Dislikes'




function FriendPost({friend, getFriends}) {
console.log(friend)


  const FRIEND_END = 'https://65148aacdc3282a6a3cd4724.mockapi.io/People'
  //const [name, email] = friend;
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
      const resp = await fetch(`${FRIEND_END}/${key}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => getFriends())
      
      // handle response accordingly
    } catch (e) {
      console.log(`deleteFriend had an error: ${e}`)
    }
  };



  return (
    <div>
      <h2>{friend.name}</h2>
      <img src={friend.image}></img>
      <div className='friendbox'>
        <div className='friendboxleft'>
          <p>Birthday :{friend.birthday}.</p>
          <p>Likes:</p>
          {friend.likes?.map((like)=> (
            <Likes like={like}/>
          ))}
        </div>
        <div className='friendboxright'>
          <p>Age: {friend.age}</p>
          <p>Dislikes:</p>
          {friend.dislikes?.map((dislike)=> (
            <Dislikes dislike={dislike}/>
          ))}
        </div>
      </div>
      <button id={`${friend.key}`}  onClick={() => deleteFriend(friend.id)}>delete</button>
    </div>
    
  )
}

export default FriendPost