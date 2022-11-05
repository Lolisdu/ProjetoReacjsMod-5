import React from 'react'
import '../style.css'
import Imagem1 from '../assets/img/dicas-de-viagem.jpg'

export default function Home() {
    return (

        <main>
            <section className="Imagem-principal">
                <div className="img-fluid">
                    <img className="conteudo-imagem" src={Imagem1} alt="imagem responsiva"></img>
                </div>
            </section>

            <section className="container">
                <div className="row align-items-start">
                    <div className="col">
                        <label for="Embarque"> Onde será seu embarque:</label>
                        <select id="Embarque" name=" Embarque">
                            <option value="São Paulo"> São Paulo</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value=" Curitiba">Curitiba</option>
                            <option value="Salvador">Salvador</option>
                        </select>
                    </div>

                    <div className="col">
                        <label for="Destino"> Escolha o destino:</label>
                        <select id="Destino" name=" Destino">
                            <option value="Londres"> Londres</option>
                            <option value="Peru">Peru</option>
                            <option value="Japao">Japao</option>
                        </select>
                        <input type="submit" href="..." alt="destino" />
                    </div>
                </div>
            </section>

            <section>
                <h3 className="conteudo-titulo">Destinos Promocionais</h3>
                <p className="conteudo-titulo"><strong>"Tudo que você precisa  </strong>saber para ter a
                    melhor <strong> experiência na sua viagem" </strong></p>
                <button className="conteudo-botao"> Saiba mais </button>
            </section>
               
    </main >

      
  )
}
