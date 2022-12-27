import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import FlashBot from './components/Telegram/FlashBot';
import HydraBot from './components/Telegram/HydraBot';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import Maintenance from './components/Maintenance/Maintenance';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/flash/:id' element={<FlashBot />} />
        <Route path='/hydra/:id' element={<HydraBot />} />
        <Route path='*' element={<Error />} />
        <Route path='maintenance' element={<Maintenance />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
