import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap';

function AddFriendForm(props) {

//add an addNewFriend function that takes the inputs of below div and does a POST and then an update function
//Update function that can be called after add and delete functions are done

//takes data from friends.js and passes it down to here
  const { data } = props;

  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState('');
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  console.log(name, birthday, age)

  // function handleChange(e){
  //   if(e.target.name === 'name'){
  //     setName(e.target.value)
  //     console.log(name)
  //   } else if (e.target.name === 'birthday'){
  //     setBirthday(e.target.value)
  //     console.log(birthday)
  //   }else if (e.target.name === 'age'){
  //     setAge(e.target.value)
  //     console.log(age)
  //   }
  // }

  function handleClick(e){
   
    const newFriend = {
      name: name,
      birthday: birthday,
      age: age,
      likes: likes,
      dislikes: dislikes,
    }
    console.log(newFriend)

    props.addNewFriend(newFriend)
  }



  return (
    <div>
      <form id='friendform' onSubmit={handleClick} method=''>       
        <input className='inputfield' type='text' placeholder='name' name='name' id='name' onChange={(e) => setName(e.target.value)} />
        <input className='inputfield' type='date' placeholder='birthday' name='birthday' id='birthday' onChange={(e) => setBirthday(e.target.value)} />
        <input className='inputfield' type='text' placeholder='age' name='age' id='age' onChange={(e) => setAge(e.target.value)} />
        <br></br>
        <input className='inputfield' type='text' placeholder='likes' name='likes' id='likes' onChange={(e) => setLikes(e.target.value)} />
        <input className='inputfield' type='text' placeholder='dislikes' name='dislikes' id='dislikes' onChange={(e) => setDislikes(e.target.value)} />
      </form>
      <Button onClick={handleClick}>submit</Button>
    </div>
  )

//grabs data from friends.js getFriends() uses it to update
//handlechange function that updates state of each input onChange={function}
//handleclick that updates data using addNewFriend (see week 15/assignment/newtoyform.js
    // or app.js)
//use 




};

export default AddFriendForm