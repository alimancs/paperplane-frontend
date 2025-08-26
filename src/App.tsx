import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/landing/Landing';
import MainSignUpScreen from './pages/user/signup-screens/MainSignUpScreen';
import MainFeed from './pages/feed/MainFeed';
import ProfileHome from './pages/profile/ProfileHome';
import ProfileLayout from './pages/profile/ProfileLayout';
import ProfileAbout from './pages/profile/ProfileAbout';

function App() {

  return (
    <Routes>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/sign-up' element={<MainSignUpScreen/>}/>
      <Route path={'/' } element={<Layout/>}>
          <Route index element={<MainFeed/>}/>
          <Route path='feed' element={<MainFeed/>}/>
          <Route path=':slug' element={<ProfileLayout/>}>
            <Route index element={<ProfileHome/>}/>
            <Route path='about' element={<ProfileAbout/>}/>
          </Route>
      </Route>
    </Routes>
  )
}

export default App
