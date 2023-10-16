import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Gallery from './components/Gallery';
import Friends from './components/Friends';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Gallery' element={<Gallery />}/>
        <Route path='/Friends' element={<Friends />}/>
      </Routes>
    </div>
  );
}

export default App;
