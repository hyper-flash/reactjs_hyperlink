import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Login from './components/Login'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Error404 from './components/404'
import Home from './components/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/fAQ' element={<FAQ />} />
          <Route path='/contact/:name' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
