import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>      
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/Login' element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
