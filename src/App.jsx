
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Moviedetails from './pages/Moviedetails'
import Landing from './pages/Landing'

function App() {
 
  return (
    <>
    <Header/>
    <Routes>
   <Route path='/' element={<Landing />} />
   
    <Route path='/movie/:id' element={<Moviedetails />} />
    </Routes>
   
    
    </>
  )
}

export default App
