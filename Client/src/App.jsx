import './App.css'
// import data from "./Components/data.json"
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import PickUpLines from './Components/PickUpLines'
import AddLines from './Components/AddLines';
import UpdateLines from './Components/UpdateLines';
import Login from './Components/Login';
import { useState, useEffect } from 'react';
import SignUp from './Components/SignUp';
import Cookies from 'js-cookie';
import About from './Components/About';


function App() {
  const [login, setLogin] = useState(false)
  const [filteredName, setFilteredName] = useState('all')

  const checkLoginStatus = () => {
    const token = Cookies.get('token');
    if (token) {
      setLogin(true);
    }
  };

  useEffect(() => {
    checkLoginStatus(); // Check login status on page load
  }, []);

  return (
    <div>
      <NavBar login={login} setLogin={setLogin} setFilteredName={setFilteredName} />
      <Routes>
        <Route path="/" element={<PickUpLines login={login} filteredName={filteredName} />} />
        <Route path='/AddPickUpLine' element={<AddLines />} />
        <Route path='/updateLine/:id' element={<UpdateLines />} />
        <Route path='login' element={<Login login={login} setLogin={setLogin} />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App
