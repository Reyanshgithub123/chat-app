import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login'
import Chat from './pages/Chat'
import SetAvatar from './pages/SetAvatar';
function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/setAvatar" element={<SetAvatar/>}></Route>
      <Route path="/" element={<Chat/>}></Route>

    </Routes> 
    </BrowserRouter>
  );
}

export default App;
