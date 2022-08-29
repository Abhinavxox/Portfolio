import React from 'react';
import Header from './components/Header';
import Footer from './components/Foooter';
import Skills from './components/Skills';
import Card from './components/Card'

function App() {
  return (
    <div>
      <Header />
      <div className='ui two column grid'>
        <Skills />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
