import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from './NotFound';
import Home from './Home';

function App() {
  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
