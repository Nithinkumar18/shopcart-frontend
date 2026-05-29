
import './App.css'
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import Login from '../src/pages/Login.jsx';
import Register from '../src/pages/Register.jsx';
import { NotificationsContainer } from '../src/services/notifications.jsx'
function App() {
 

  return (
    <>
     <NotificationsContainer/>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
