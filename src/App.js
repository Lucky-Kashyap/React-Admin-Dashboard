import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
function App() {
  return (
   
    <>
      <Navbar/>
      <div className='container'>
        <Sidebar/>
        <Home/>
      </div>

      </>
      
     

  );
}

export default App;
