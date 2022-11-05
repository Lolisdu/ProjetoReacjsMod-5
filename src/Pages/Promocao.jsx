import React from 'react'
import Imagem1 from '../assets/img/Londres.jpg'
import Imagem2 from '../assets/img/japao.jpg'
import Imagem3 from '../assets/img/Sidnei.jpg'

export default function Promocao() {

  return (
    
    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="card shadow-sm">
              <img className="bd-placeholder-img card-img-top" width="50%" height="50" src={Imagem1} alt="img"></img>
              <div className="card-body">
                <p className="card-text">Conheça Londres e o que ela tem de melhor.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

          <div className="col">
            <div className="card shadow-sm">
              <img className="bd-placeholder-img card-img-top" width="50%" height="50" src={Imagem2} alt="img"></img>
              <div className="card-body">
                <p className="card-text">Conheça o Japão e os lugares mais fantasticos .</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img className="bd-placeholder-img card-img-top" width="50%" height="50" src={Imagem3} alt="img"></img>
              <div className="card-body">
                <p className="card-text"> Conheça Sidney os melhores lugares da Australia.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Ver</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
  )
}
