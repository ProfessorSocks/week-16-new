import React, { useEffect, useState } from 'react'
import AddFriendForm from './AddFriendForm'
import FriendPost from './FriendPost'


//Do a fetch call async
//




//map thru friends to grab name,image,birthday,age,romance and then likes/dislikes inside of friendspost
function Friends() {

  const FRIEND_END = 'https://65148aacdc3282a6a3cd4724.mockapi.io/People'

  const [data, setData] = useState([])

  const getFriends = async () => {
    try{
      const resp = await fetch(FRIEND_END);
      const data = await resp.json();
      return setData(data);
    }catch(e){
      console.log('getFriends had an error:', e);
    }
  }
  useEffect(()=>{
    getFriends()
  }, [])

  const addNewFriend = async (friend) => {
    try {
      const resp = await fetch(FRIEND_END, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(friend),
      });
      if (resp.ok) {
        const data = await resp.json();
        setData([...data, data]); // Update the local data state with the new friend from the API
      }
    } catch (e) {
      console.log('addNewFriend had an error:', e);
    }
  };

  function updateFriend(friend){
    return fetch(`${FRIEND_END}/${friend}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(friend)
    })
  }


  const deleteFriend = async (friend) => {
    try{
      const resp = await fetch(`${FRIEND_END}/${friend.id}`,{
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }catch (e){
      console.log(`deletefriend had an error: ${e}`)
    }
  };
  


  return (
    <div className='friendpage'>
      <AddFriendForm addNewFriend={addNewFriend}/>
      {data.map((friend) => (
        <FriendPost friend={friend} getFriends={getFriends} />
      ))}

    </div>
  )
}

export default Friends