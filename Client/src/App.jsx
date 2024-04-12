import './App.css'
// import data from "./Components/data.json"
import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './Components/NavBar'
import PickUpLines from './Components/PickUpLines'
import AddLines from './Components/AddLines';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<PickUpLines />} />
        <Route path='/AddPickUpLine' element={<AddLines />} />
      </Routes>
    </div>
  );
}

export default App
