import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/common/Navbar';
import Rockets from './routes/Rockets';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
      </Routes>
    </Router>
  );
}

export default App;
