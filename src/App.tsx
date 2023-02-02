import React from 'react';
import './App.scss';

import { Header, Footer, About, Chavan, Dhanu } from './container';
import { Navbar } from './components';

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Chavan />
        <Dhanu />
        <Footer />
      </div>
    </>
  );
}

export default App;
