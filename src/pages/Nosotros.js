import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import Nosotros1 from '../assets/img/nosotros/nosotros-1.jpeg';
import Nosotros2 from '../assets/img/nosotros/nosotros-2.jpeg';
import Nosotros3 from '../assets/img/nosotros/nosotros-3.jpeg';
import Organigrama from '../assets/img/nosotros/organigrama.jpeg';
import './Nosotros.css';

const Nosotros = () => {
    return (
        <div className="main-section">
            <div className="main-section__container">
                <h1 className="main-section-title title">Nosotros</h1>
                <p className="main-section-text nosotros-text">
                    Somos una comunidad de lazos profundos, y caminamos juntos de hace ya muchos años. Nos une la búsqueda espiritual, el trabajo comunitario,
                    el interés por los que más necesitan y la profundización y actualización en la vida de la fe.
                    Podemos ver la variedad de actividades y carismas en el organigrama debajo:
                </p>
                <div className="main-section-content__container">
                    <div className="main-section__content main-content-img">
                        <img src={Organigrama} alt="Organigrama Capilla Marín" />
                    </div>
                    <div className="main-section__content main-content-img">
                        <Carousel interval={2000}>
                            <Carousel.Item>
                                <img src={Nosotros1} alt="Nosotros Foto 1" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Nosotros2} alt="Nosotros Foto 2" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Nosotros3} alt="Nosotros Foto 3" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros;