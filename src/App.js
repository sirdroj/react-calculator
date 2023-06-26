import React, { useState } from 'react'
import Calculator from './components/Calculator'
const App = () => {
  const[ama,setama]=useState("aman")
  return (
    <div>
    <Calculator />
    </div>
  )
}

export default App