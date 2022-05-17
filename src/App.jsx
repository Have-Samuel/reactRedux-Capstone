import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Details from '';
import Home from '';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
