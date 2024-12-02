import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ResultPage from './components/ResultPage/ResultPage';
import IVFCalculator from './components/IVFCalculator/IVFCalculator';

function App() {
  return (
    <Router>  {/* Wrap your app with BrowserRouter */}
    <div  >
        <div className='aa'>
          <Navbar />
        </div>
        <Routes>
        {/* Set the default route to IVFCalculator */}
        <Route path="/" element={<Home />} /> {/* Default component */}
       
        <Route path="/result" element={<ResultPage />} />
        <Route path="/ivfCalculator" element={<Home />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
