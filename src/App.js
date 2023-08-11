import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  const location=useLocation();
  const navigateTo=useNavigate();
  useEffect(()=>{
    if(location.pathname==='/'){
      navigateTo('/home');
    }
  },[location]);
  return (
    <>
    <Navbar/>
    <Routes path='/'>
      <Route path='home' element={<Home/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
