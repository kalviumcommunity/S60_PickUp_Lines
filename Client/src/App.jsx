import './App.css'
import data from "./Components/data.json"

function App() {

  return (
    <div className='container'>
      {data.map((data) => {
        return (
          <div className='data-container' key={data.id}>
            {data.lines}
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
