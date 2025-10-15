import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/landing/Landing';
import MainSignUpScreen from './pages/user/signup-screens/MainSignUpScreen';
import MainFeed from './pages/feed/MainFeed';
import ProfileHome from './pages/profile/ProfileHome';
import ProfileLayout from './pages/profile/ProfileLayout';
import ProfileAbout from './pages/profile/ProfileAbout';
import SettingsAcc from './pages/me/SettingsAcc';
import SettingsLayout from './pages/me/SettingsLayout';
import SettingsPublishing from './pages/me/SettingsPublishing';
import SettingsNotifications from './pages/me/SettingsNotifications';
import SettingsMP from './pages/me/SettingsMP';
import SettingsSA from './pages/me/SettingsSA';
import AllNotifications from './pages/notifications/AllNotifications';
import NotificationsLayout from './pages/notifications/NotificationsLayout';
import NotificationsResponses from './pages/notifications/NotificationResponses';

function App() {

  return (
    <Routes>
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/sign-up' element={<MainSignUpScreen/>}/>
      <Route path={'/' } element={<Layout/>}>
          <Route index element={<MainFeed/>}/>
          <Route path='feed' element={<MainFeed/>}/>
          <Route path='notifications' element={<NotificationsLayout/>}>
            <Route index element={<AllNotifications/>}/>
            <Route path='r' element={<NotificationsResponses/>}/>
          </Route>
          <Route path=':slug' element={<ProfileLayout/>}>
            <Route index element={<ProfileHome/>}/>
            <Route path='about' element={<ProfileAbout/>}/>
          </Route>
          <Route path='me/settings' element={<SettingsLayout/>}>
            <Route index element={<SettingsAcc/>}/>
            <Route path='publishing' element={<SettingsPublishing/>}/>
            <Route path='notifications' element={<SettingsNotifications/>}/>
            <Route path='membership' element={<SettingsMP/>}/>
            <Route path='security' element={<SettingsSA/>}/>
          </Route>
      </Route>
    </Routes>
  )
}

export default App
