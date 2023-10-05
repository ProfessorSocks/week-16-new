import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';

export default function App(){
  const posts = [
    {
      id:1,
      title: 'Camille',
      date: '9-26-23',
      content: 'Camille is pretty'
    },
    {
      id:2,
      title: 'Sheyla',
      date: 'always',
      content: 'Sheyla is pretty'
    },
    {
      id:3,
      title: 'Paige',
      date: '9-26-23',
      content: 'Hi Poopy Paige'
    },
    {
      id:4,
      title: 'Alex',
      date: '9-26-23',
      content: 'Hi Doofy Alex'
    }
  ];

  return(
      <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/friends">Friends</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            </ul>
            <Switch>
              <Route path='/posts'>
                <Posts posts={posts}></Posts>
              </Route>
              <Route path='/friends'>
                <Friends names={['Sheyla','Alex','Paige']}></Friends>
              </Route>
              <Route path='/'>
                <Home></Home>
              </Route>
            </Switch>
          </div>
      </Router>
    )

}

function Home(){
  return(
    <div>
      <h2>Home</h2>
    </div>
  )
}

function Friends(){
  return (
    <h2>Friends</h2>
  )
}

function Posts(){
  return(
    <h2>Posts</h2>
  )
}