import React from 'react';
import { RecoilRoot } from 'recoil';
import Home from './Components/Home';
import Input from './Components/Input';

function App() {
  return (
    <RecoilRoot>
      <Home />
      <Input />
    </RecoilRoot>
  );
}
export default App;
