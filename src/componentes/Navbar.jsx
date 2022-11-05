import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css'
import Imagem1 from "../assets/img/logo.svg";


export default function Navbar() {
  return (
    <div>
     <table className="cabecalho-principal" width="100%" style={{ background: "purple"}}>
    <tr className="cabecalho">
    <Link className="cabecalho-imagem-logo" to="/Home"><img src= {Imagem1} alt="logo"/></Link>    
        <Link className="cabecalho" to="/Promocao"> Promocao </Link>
       <Link className="cabecalho" to="/Destinos"> Destinos</Link>
      <Link className="cabecalho" to="/Contato"> Contato </Link>  
    </tr>
</table>
    </div>
  )
}
