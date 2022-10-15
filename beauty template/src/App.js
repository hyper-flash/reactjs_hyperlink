import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Wedo from "./components/we_do/We_do";
import Pricing from "./components/pricing/Pricing";

function App() {
  var [title , setTitle] = useState("home");

  const setToolbarTitle = (titleSet) => {
    console.log("Title ===>", titleSet)
    setTitle(titleSet)
  }

  return (
    <>
     <BrowserRouter>
      <Header selectedTitle = {title} />
      <Routes>

          <Route path='/' element={<Home changeTitle = {setToolbarTitle} />} />
          
          <Route path='/about' element={<About changeTitle = {setToolbarTitle} />} />

          <Route path='/contact' element={<Contact changeTitle = {setToolbarTitle} />} />

          <Route path='/pricing' element={<Pricing changeTitle = {setToolbarTitle} />} />

          <Route path='/we-do' element={<Wedo changeTitle = {setToolbarTitle} />} />

      </Routes>
      <Footer selectedTitle = {title} />
    </BrowserRouter>
    </>
  );
}

export default App;
