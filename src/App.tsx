import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/landing/Landing';
import MainSignUpScreen from './pages/user/signup-screens/MainSignUpScreen';
import MainFeed from './pages/feed/MainFeed';

function App() {

  return (
    <Routes>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/sign-up' element={<MainSignUpScreen/>}/>
      <Route path={'/feed' } element={<Layout/>}>
          <Route index element={<MainFeed/>}/>
      </Route>
      <Route path={'/' } element={<Layout/>}>
          <Route index element={<MainFeed/>}/>
      </Route>
    </Routes>
  )
}

export default App
