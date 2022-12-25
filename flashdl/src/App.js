import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './components/show-details/Profile'
import Table from './components/table/Table';
import FlashBot from './components/Telegram/FlashBot';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/' element={<Table />} />
        <Route path='/flash/:id' element={<FlashBot />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
