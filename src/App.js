import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import homePage from './images/homePage.JPG'

function App() {
  return (
    <BrowserRouter>
      <div className='background-image' style={{ backgroundImage: `url(${homePage})` }}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/work' component={Work} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
