import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Footer from './componentes/Footer'
import Home from './Pages/Home'
import Destinos from './Pages/Destinos'
import Contato from './Pages/Contato'
import Promocao from './Pages/Promocao' 

export default function Rotas() {
  return (
    <Router>  
        <Navbar/>
        <Routes>
            <Route path='/Home' element= {<Home/>}/>
            <Route path='/Promocao' element= {<Promocao/>}/>
            <Route path='/Destinos' element= {<Destinos/>}/>
            <Route path='/Contato' element= {<Contato/>}/>
            </Routes>
            <Footer/>
    </Router>
  )
}
