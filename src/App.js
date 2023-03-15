import React from 'react';
import './App.css';
import Head from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

function App() {
  return (
    <React.Fragment>
      <Head/>
      <Nav/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
