import { useState } from 'react'
import './App.css'
import Caculator from './components/caculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
          <Calculator/>
      </header>
    </div>
  )
}

export default App
