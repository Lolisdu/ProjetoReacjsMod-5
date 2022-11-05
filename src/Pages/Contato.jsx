import React from 'react'

export default function Contato() {
  return (
   
    <main>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> São Paulo</th>
                        <th scope="col"> Av. Paulista, 1000- Paulista</th>
                        <th scope="col"> 11- 9999-9999 </th>
                        <th scope="col"> 11- 9999-9999 </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td> Curitiba </td>
                        <td> Rua São Carlos, 503- Centro</td>
                        <td> 44- 9999-9999</td>
                       </tr>
                </tbody>
            </table>
            <form width="50%" className="formulario text-center">
                <label for="Comentário"> Deixe seu comentário</label>
                <input type="text" id="comentário" value="Escreva aqui..." />
                <input type="enviar" value="Enviar" />
            </form>
        </main >
  )
}

