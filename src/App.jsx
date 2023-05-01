import React from 'react'
import './App.css'
import ProductContext from './Context/ProductContext'
import Store from './Components/store';


function App() {
  return (
<ProductContext >
<Store/>
</ProductContext>
  )
}

export default App
