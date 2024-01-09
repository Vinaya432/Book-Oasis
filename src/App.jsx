import './App.css'
import Footer from './components/Footer'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Favourates from './pages/Favourates'
import { Route ,Routes } from 'react-router-dom'
import ViewBook from './components/ViewBook'

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/fav' element={<Favourates/>}></Route>
        <Route path='/viewBook/:id' element={<ViewBook/>}></Route>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
