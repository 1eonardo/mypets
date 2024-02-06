import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Costumers from './components/costumers/Costumers';

const App = () => {
  return (
    <>
        <Navbar />
        <main className="main">
            <Home />
            <Category />
            <About />
            <Services />
            <Costumers />
            
        </main>
        <Footer />
    </>
  );
};

export default App;
