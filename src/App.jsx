import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cards from './pages/Cards'


function App() {


  return (<>
    <nav>
      <NavLink to="/">Home</NavLink>{" / "}
      <NavLink to="/cards">Cards</NavLink>
    </nav>



    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cards' element={<Cards/>}/>
    </Routes>

    
    
    </>)
}

export default App
