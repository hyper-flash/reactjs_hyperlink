import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Service from "./components/service/Service";
import Price from "./components/price/Price";
import Blog from "./components/blog/Blog";
import Detail from "./components/detail/Detail";
import Team from "./components/team/Team";
import Testimonial from "./components/testimonial/Testimonial";
import Appointment from "./components/appointment/Appointment";
import Search from "./components/search/Search";

function App() {
  var [title, setTitle] = useState("home")

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

          <Route path='/service' element={<Service changeTitle = {setToolbarTitle} />} />

          <Route path='/price' element={<Price changeTitle = {setToolbarTitle} />} />

          <Route path='/blog' element={<Blog changeTitle = {setToolbarTitle} />} />

          <Route path='/detail' element={<Detail changeTitle = {setToolbarTitle} />} />

          <Route path='/team' element={<Team changeTitle = {setToolbarTitle} />} />

          <Route path='/testimonial' element={<Testimonial changeTitle = {setToolbarTitle} />} />

          <Route path='/appointment' element={<Appointment changeTitle = {setToolbarTitle} />} />

          <Route path='/search' element={<Search changeTitle = {setToolbarTitle}/>} />

      </Routes>

      <Footer selectedTitle = {title} />
      </BrowserRouter>
    </>
  );
}

export default App;
