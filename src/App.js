import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Costumers from './components/costumers/Costumers';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<section id="home"><Home /><Category /><About /><Services /><Costumers /></section>} />
            {/* Agrega otras rutas según sea necesario */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
