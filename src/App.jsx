import { Route, Routes, NavLink, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cards from './pages/Cards'
import CardDetails from './pages/CardDetails'


function App() {


  return (<>
    <nav>
      <NavLink to="/">Home</NavLink>{" | "}
      <NavLink to="/cards">Cards</NavLink>
    </nav>



    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/cards/:cardID' element={<CardDetails/>}/>
      <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>

    
    
    </>)
}

export default App
