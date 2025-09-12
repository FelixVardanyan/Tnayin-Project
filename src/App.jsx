import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import Menu from './components/Menu/Menu'
import Home from './Pages/Home'
import About from './Pages/About'
import Weather from './Pages/Weather'
import Register from './Pages/Register'


function App() {
  return (
    <BrowserRouter>
        <Menu/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/About'  element={<About/>} />
        <Route exact path='/Contact' element={<Contact/>} />
        <Route exact path='/Weather' element={<Weather/>} />
        <Route exact path='/Register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App



