import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/general-components/Layout';
import Feed from './pages/feed/Feed';
import Landing from './pages/landing/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/feed'element={<Layout/>}>
          <Route index element={<Feed/>}/>
      </Route>
    </Routes>
  )
}

export default App
