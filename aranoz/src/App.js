import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/other/header/Header";
import Footer from "./components/other/footer/Footer";
import Home from "./components/pages/Home/Home";
import Category from './components/pages/category/Category';
import Singleproduct from './components/pages/single-product/Single-product'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/single-product' element={<Singleproduct />} />
      </Routes>

      <Footer />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
