import React from 'react';
import {Routes, Route} from 'react-router-dom';

// My imports
import Home from './pages/Home';
import About from './pages/About';

import ScrollToTop from './components/layout/ScrollToTop';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/layout/CustomCursor';
import BottomLinks from './components/layout/BottomLinks';

function App() {
  return (
    <div className='relative bg-white text-black font-poppins'>
    <CustomCursor />
    <Navbar/>
    <div
      data-scroll-container
      className='mainDiv
      '
    >
      <BottomLinks className={`fixed bottom-5 left-5 z-[999]`}/>

      <ScrollToTop />


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
    </div>
  )
}

export default App
