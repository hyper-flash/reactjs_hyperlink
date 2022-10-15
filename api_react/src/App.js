import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './components/show-details/Profile'
import Table from './components/table/Table';
import Post from './components/post/Post';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/' element={<Table />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
