import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import VoorScholen from './pages/VoorScholen';
import Contact from './pages/Contact';
import OverMij from './pages/OverMij';
import Waarom from './pages/Waarom';
import Home from './pages/Home';
import Tarieven from './pages/Tarieven';
import Aanbod from './pages/Aanbod';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/OverMij' element={<OverMij/>} />
          <Route path='/Waarom' element={<Waarom />} />
          <Route path='/Aanbod' element={<Aanbod />} />
          <Route path='/VoorScholen' element={<VoorScholen />} />
          <Route path='/Tarieven' element={<Tarieven />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
