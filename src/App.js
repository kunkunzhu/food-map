import React from 'react';
import './App.css';
import { Nav } from './components/Nav';
import WaterlooView from './pages/WaterlooView';
import TorontoView from './pages/TorontoView';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/waterloo" element={<WaterlooView/>}></Route>
          <Route exact path="/toronto" element={<TorontoView/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
