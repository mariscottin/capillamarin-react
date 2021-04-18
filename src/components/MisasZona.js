import React from 'react'
import './MisasZona.css';
function MisasZona() {
    return (
        <table className="tabla-misas-zona table">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Durante el Año</th>
                    <th scope="col" id="durante-el-año">Durante el Año</th>
                    <th scope="col" id="vacaciones">Vacaciones</th>
                    <th scope="col">Vacaciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Semana</th>
                    <th scope="col">Fin de Semana</th>
                    <th scope="col">Semana</th>
                    <th scope="col">Fin de Semana</th>
                </tr>
                <tr>
                    <th scope="row">Catedral de San Isidro</th>
                    <td>8, 10 y 19hs</td>
                    <td>sab 10 y 19hs; dom 9:30, 12:30, 19 y 23hs</td>
                    <td>19hs</td>
                    <td>sab 10hs; dom 9:30, 12:30, 19 y 20hs</td>
                </tr>
                <tr>
                    <th scope="row">Ntra Sra de Lourdes</th>
                    <td>19hs</td>
                    <td>sab 19hs; dom 11:30 y 20hs</td>
                    <td>desde el 9/12 19:30hs</td>
                    <td>sab 19:30hs; dom 11:30 y 20hs</td>
                </tr>
                <tr>
                    <th scope="row">Espíritu Santo</th>
                    <td>19hs</td>
                    <td>sab 19hs; dom 9:30, 11 y 19hs</td>
                    <td>desde el 2/2 19:30hs</td>
                    <td>sab 20hs; ene y feb dom 10 y 20hs</td>
                </tr>
                <tr>
                    <th scope="row">Ntra Sra de la Cava</th>
                    <td></td>
                    <td>sab 17:30hs; dom 10 y 19hs</td>
                    <td></td>
                    <td>sab 19:30hs; dom 10 y 20hs</td>
                </tr>
                <tr>
                    <th scope="row">San José</th>
                    <td>19hs</td>
                    <td>sab 19hs; dom 11 y 19:30hs</td>
                    <td>19:30hs</td>
                    <td>sab 19:30hs; dom 11 y 20hs</td>
                </tr>
                <tr>
                    <th scope="row">Hogar Marín</th>
                    <td>8hs</td>
                    <td>sab 8hs; dom 11hs</td>
                    <td>8hs</td>
                    <td>sab 8hs; dom 11</td>
                </tr>
                <tr>
                    <th scope="row">Stella Maris</th>
                    <td></td>
                    <td>sab 19hs; dom 11hs</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">La Ribera</th>
                    <td></td>
                    <td>sab 18hs; dom 20hs</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Sta María de la Cabeza</th>
                    <td></td>
                    <td>dom 11hs</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Sta María de Luján</th>
                    <td>19hs</td>
                    <td>sab 19:30; dom 10, 11:30 y 19hs</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">San José Obrero</th>
                    <td>19hs</td>
                    <td>dom 10 y 19hs</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Santo Cristo</th>
                    <td>19:30hs</td>
                    <td>sab 19hs; dom 11:30 y 19hs</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Sta Rafaela María</th>
                    <td>martes 20:30hs</td>
                    <td>sab 18hs; dom 11:30 y 19hs</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Niño Jesús de Praga</th>
                    <td></td>
                    <td>sab 19hs; dom 9:30, 11 y 20hs</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th scope="row">Ntra Sra de Fátima</th>
                    <td>19hs</td>
                    <td>sab 19hs; dom 10, 12, 18 y 20hs</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default MisasZona;
