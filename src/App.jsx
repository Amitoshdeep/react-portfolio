import React from 'react';
import {Routes, Route} from 'react-router-dom';

// My imports
import Home from './pages/Home';
import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/layout/CustomCursor';
function App() {
  return (
    <div className='relative bg-white text-black'>
    <CustomCursor />
    <Navbar/>
    <div
      data-scroll-container
      className='mainDiv
      '
    >
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
    </div>
  )
}

export default App
