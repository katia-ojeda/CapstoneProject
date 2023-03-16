import React from 'react';

import './App.css';
import Head from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';

function App() {
  return (
    <div>
      <Head/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route index element={<Main/>}/>
        <Route path='/BookingPage' element={<BookingPage/>}/>
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
