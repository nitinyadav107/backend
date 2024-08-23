

import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setdata(response.data)
      }
      )
      .catch(error => {
        console.error(error)
      }
      )
  })


  return (
    <>
      <h1>full stack</h1>
      <p>DATA: {data.length}</p>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Major: {item.major}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;