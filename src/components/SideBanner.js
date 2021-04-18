import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import db from '../firebase';
import Moment from 'react-moment';

import MisasZona from './MisasZona';

import './SideBanner.css';

const SideBanner = () => {
    const [show, setShow] = useState(false);
    const [modalTopic, setModalTopic] = useState(null);
    const [homilias, setHomilias] = useState();

    const handleShow = (topic) => {
        setModalTopic(topic);
        setShow(true);

    }
    const handleClose = () => {
        setModalTopic(null);
        setShow(false);
    }

    useEffect(() => {
        db.collection('audios').orderBy("date", "desc").limit(4).onSnapshot(snapshot => {
            setHomilias(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })
    }, []);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalTopic === 'homilias' && 'Homilías'}
                        {modalTopic === 'misas' && 'Misas de la Zona'}
                    </Modal.Title>
                </Modal.Header>
                {modalTopic === 'homilias' &&
                    <Modal.Body>
                        {
                            homilias.map(homilia => {
                                return (
                                    <div className="modal__homlia" key={homilia.id}>
                                        <h5>{homilia.data.title}</h5>
                                        <h6>
                                            <Moment format="DD/MM/YYYY">
                                                {homilia.data.date}
                                            </Moment>
                                        </h6>
                                        <audio controls>
                                            <source src={homilia.data.url} type="audio/mpeg" />
                                            Your browser does not support the audio element.
                                    </audio>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </Modal.Body>
                }
                {modalTopic === 'misas' &&
                    <Modal.Body>
                        <MisasZona />
                    </Modal.Body>
                }
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={handleClose}>
                        Cerrar
                    </button>
                </Modal.Footer>
            </Modal>

            <div className="sidebanner">
                <div className="sidebanner-general evangelio-dia">
                    <h4>Evangelio del Día</h4>
                    <a href="https://www.evangeliodeldia.org/SP/gospel" target="_blank" rel="noopener noreferrer" className="light-blue-link">www.evangeliodeldia.org</a>
                </div>
                <div className="sidebanner-general horarios-misa">
                    <h4>Horarios de Misa</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>Lunes a Miércoles</th>
                                <td>19:00hs</td>
                            </tr>
                            <tr>
                                <th>Jueves</th>
                                <td>No hay misa</td>
                            </tr>
                            <tr>
                                <th>Viernes y Sábados</th>
                                <td>19:00hs</td>
                            </tr>
                            <tr>
                                <th>Domingos</th>
                                <td>11:30hs y 20:00hs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="sidebanner-general">
                    <h4>Confesiones</h4>
                    <p>Media hora antes de cada misa</p>
                </div>
                <div className="sidebanner-general">
                    <h4>Atención Sacerdotal</h4>
                    <p>Pedir horario en Secretaría</p>
                </div>
                <div className="sidebanner-general">
                    <h4>Homilías</h4>
                    <p className="light-blue-link" onClick={() => handleShow('homilias')}>Ver las homilías</p>
                </div>
                <div className="sidebanner-general">
                    <h4>Misas de la Zona</h4>
                    <p className="light-blue-link" onClick={() => handleShow('misas')}>Ver misas de la zona</p>
                </div>
            </div>

        </>
    )
}

export default SideBanner;