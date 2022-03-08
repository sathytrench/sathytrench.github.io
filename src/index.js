import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from './ScrollToTop';
import NavBar from './NavBar';
import App from './App';
import About from './About';
import Work from './Work';
import Lost from './Lost';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="work" element={<Work />} />
        <Route path="*" element={<Lost />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);