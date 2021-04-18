import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import StandardSection from '../../components/StandardSection';

import Matrimonios1 from '../../assets/img/matrimonios/matrimonios-1.jpg';
import Matrimonios2 from '../../assets/img/matrimonios/matrimonios-2.jpg';
import Matrimonios3 from '../../assets/img/matrimonios/matrimonios-3.jpg';


const Matrimonios = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Requisitos</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ul>
                        <li>Traer fotocopia de DNI.</li>
                        <li>La fecha puede ser reservada solo personalmente.</li>
                        <li>La fecha deberá tener no menos de seis meses ni más de un año de anticipación.</li>
                    </ul>
                </Modal.Body>
            </Modal>
            <StandardSection
                title="Matrimonios"
                textOrHtml={[
                    "Los novios que estén interesados en celebrar su matrimonio en el templo, necesitan pedir una entrevista personal (no virtual) con nuestra secretaria parroquial para iniciar el proceso y reservar fecha (",
                    <span className="blue-link" style={{ fontSize: 16 }} onClick={handleShow}>requisitos</span>,
                    "). En la entrevista se les explicará los pasos a seguir. Concurrir con fotocopia de DNI."
                ]}
                contactInfo={false}
                imgs={[Matrimonios1, Matrimonios2, Matrimonios3]}
                category="matrimonios"
            />
        </>
    )
}

export default Matrimonios;