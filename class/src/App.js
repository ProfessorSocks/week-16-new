import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import { useState, axios } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Button } from 'reactstrap';
import Home from './components/Home';
import Gallary from './components/Gallary';
import Navbar from './components/Navbar';
import Fight from './components/Fight';
import { useEffect } from 'react';

function App() {

  const [student, setStudent] = useState([])
  let url = 'https://64eeabbf219b3e2873c3646f.mockapi.io/Cats'
  
  useEffect(() => {
    const getStudents = async () => {
      let data = await axios.get(url)
    }
  }, [])


  return (
    <div className="App-header">
      <h2>Camille's Website</h2>
      <button color='danger'>click</button>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gallary' element={<Gallary cat={}/>} />
        <Route path='/fight' element={<Fight/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>

    </div>
  );
}

export default App;
