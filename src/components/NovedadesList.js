import React from 'react';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import './NovedadesList.css';

function NovedadesList({ novedades }) {

    const history = useHistory();

    const secondsToDate = (secs) => {
        let t = new Date(1970, 0, 1);
        t.setSeconds(secs);
        return t;
    }

    const redirectToNovedad = (nid) => {
        history.push(`/novedad/${nid}`)
    }

    return (
        <table className="novedadesList table table-striped table-responsive">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Título</th>
                    <th>Cuerpo</th>
                    <th>Fotos</th>
                </tr>
            </thead>
            <tbody>
                {novedades.map(novedad => (
                    <tr key={novedad.id} className="novedadesList__row" onClick={() => redirectToNovedad(novedad.id)}>
                        <td>
                            <Moment format="DD/MM/YYYY" >
                                {secondsToDate(novedad.data.date.seconds)}
                            </Moment>
                        </td>

                        <td>{novedad.data.title}</td>
                        {novedad.data.body.length > 39 ?
                            <td>{novedad.data.body.substr(0, 40)}...</td>
                            :
                            <td>{novedad.data.body}</td>
                        }
                        {/* {console.log(`Novedad: ${novedad.data.title}, imgUrl: ${novedad.data.img}`)} */}
                        <td><img src={novedad.data.img[0]} alt={novedad.data.title} className="novedadesList__image" /></td>
                    </tr>
                ))}
            </tbody>
            {/* <ul>
                {novedades.map(novedad => (
                    <li key={novedad.id}>
                        <div className="novedadesList__row">
                            <div className="novedadesList__row-item">
                                <Moment format="DD/MM/YYYY HH:mm">
                                    {secondsToDate(novedad.data.date.seconds)}
                                </Moment>
                            </div>
                            <div className="novedadesList__row-item">
                                {novedad.data.title}
                            </div>
                            <div className="novedadesList__row-item">
                                {novedad.data.body}
                            </div>
                        </div>
                    </li>
                ))}
            </ul> */}
        </table>
    )
}

export default NovedadesList;
