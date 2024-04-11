import './App.css'
// import data from "./Components/data.json"
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('http://localhost:4000/lines')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  return (
    <div className='container'>
      {data && data.map((data) => {
        return (
          <div className='data-container' key={data._id}>
            {data.pickupline}
            <div className='category' >
              <p>Category: {data.category}</p>
              <p>{data.likes} ❤</p>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default App
