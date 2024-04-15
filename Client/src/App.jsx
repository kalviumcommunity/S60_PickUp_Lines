import './App.css'
// import data from "./Components/data.json"
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import PickUpLines from './Components/PickUpLines'
import AddLines from './Components/AddLines';
import UpdateLines from './Components/UpdateLines';
import Login from './Components/Login';
import { useState } from 'react';


function App() {
  const [login, setLogin] = useState(false)
  return (
    <div>
      <NavBar login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<PickUpLines />} />
        <Route path='/AddPickUpLine' element={<AddLines />} />
        <Route path='/updateLine/:id' element={<UpdateLines />} />
        <Route path='login' element={<Login login={login} setLogin={setLogin} />} />
      </Routes>
    </div>
  );
}

export default App
