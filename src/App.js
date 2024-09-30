import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import PostPage from "./pages/PostPage";
import EditPage from './pages/EditPage';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <UserContextProvider>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path={'/login'} element={<Login/>}></Route>
          <Route path={'/register'} element={<Register/>}></Route>
          <Route path={"/createpost/:id"} element={<CreatePost/>}></Route>
          <Route path={"/post/:id"} element={<PostPage/>}></Route>
          <Route path={"/edit/:id"} element={<EditPage/>}></Route>
        </Route>
      </Routes>

    </UserContextProvider>
  );
};

export default App;
