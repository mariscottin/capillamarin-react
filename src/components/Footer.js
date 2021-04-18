import React from 'react';
import Escudo from '../assets/img/escudo_colegiomarin.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useStateValue } from '../StateProvider';

import './Footer.css';

const Footer = () => {
    const [{ user }] = useStateValue();
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer-title">
                    <h2>Capilla Colegio Marín</h2>
                    <a href="http://www.marin.edu.ar" target="_blank" rel="noopener noreferrer" className="marin-brand">
                        <img src={Escudo} alt="Escudo Colegio Marín" />
                        Grupo Educativo Marín
                    </a>

                </div>
                <div className="footer-info">
                    <div className="footer-info-item">
                        <div>
                            <FontAwesomeIcon icon={faMapMarker} />
                        </div>
                        <div>
                            Av. Libertador 17115, San Isidro<br />
                            Buenos Aires, Argentina
                        </div>
                    </div>
                    <div className="footer-info-item">
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div>
                            011 4743-0028 (int. 312)
                        </div>
                    </div>
                    <div className="footer-info-item">
                        <div>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                        <div>
                            +54 9 11 7036-9883<br />
                            <span style={{ fontSize: 11, marginLeft: 6 }}>Solo envía, no responde</span>
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="footer-info-item">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div>
                            <a href="mailto:infocapilla@marin.edu.ar">infocapilla@marin.edu.ar</a>
                        </div>
                    </div>
                    <div className="footer-info-item">
                        <div>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                        <div>
                            <a href="https://www.instagram.com/jovenescapillamarin/" target="_blank" rel="noopener noreferrer">@jovenescapillamarin</a>
                        </div>
                    </div>
                    <div className="footer-info-item">
                        <div>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div>
                            <a href="https://www.facebook.com/capillamarinsanisidro" target="_blank" rel="noopener noreferrer">@capillamarinsanisidro</a>
                        </div>
                    </div>
                </div>
                <div className="footer__login-container">
                    {user ?
                        <Link to="/admin">Admin Login</Link>
                        :
                        <Link to="/login">Admin Login</Link>

                    }

                </div>
            </div>
            <div className="bottom-footer">
                <div className="bottom-footer__container">
                    <div>
                        &copy; Capilla Marín - 2020
                    </div>
                    <div>
                        Desarrollado por:<span><a href="https://www.nicomariscotti.com" target="_blank" rel="noopener noreferrer">Nico Mariscotti</a></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;