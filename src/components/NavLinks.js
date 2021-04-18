import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './NavLinks.css';
const NavLinks = (props) => {
    const [links, setLinks] = useState([
        {
            main: 'Nosotros',
            sublinks: [],
            isOpen: false,
            url: '/nosotros'
        },
        {
            main: 'Servicios para la Comunidad',
            sublinks: [
                { name: 'Matrimonios', url: '/servicios-para-la-comunidad/matrimonios' },
                { name: 'Cursos Prematrimoniales', url: '/servicios-para-la-comunidad/cursos-prematrimoniales' },
                { name: 'Bautismos', url: '/servicios-para-la-comunidad/bautismos' },
                { name: 'Reconciliaciones y Charlas Espirituales', url: '/servicios-para-la-comunidad/reconciliaciones-y-charlas-espirituales' },
                { name: 'Visitas a Enfermos', url: '/servicios-para-la-comunidad/visitas-a-enfermos' }
            ],
            isOpen: false
        },
        {
            main: 'Espiritualidad',
            sublinks: [
                { name: 'Adoración', url: '/espiritualidad/adoracion' },
                { name: 'Liturgia y Espiritualidad', url: '/espiritualidad/liturgia-y-espiritualidad' },
                { name: 'Ministros', url: '/espiritualidad/ministros' },
                { name: 'Coro', url: '/espiritualidad/coro' },
                { name: 'Meditación Cristiana', url: '/espiritualidad/meditacion-cristiana' },
                { name: 'Círculos de Oración', url: '/espiritualidad/circulos-de-oracion' },
                { name: 'Cíclos de Conferencias Vida, Fe y Cultura', url: '/espiritualidad/ciclos-de-conferencias' }
            ],
            isOpen: false
        },
        {
            main: 'Retiros',
            sublinks: [
                { name: 'Entretiempo', url: '/retiros/entretiempo' },
                { name: 'Oportunidad', url: '/retiros/oportunidad' },
                { name: 'Retiros Comunitarios', url: '/retiros/retiros-comunitarios' }
            ],
            isOpen: false
        },
        {
            main: 'Jóvenes',
            sublinks: [
                { name: 'Confirmación', url: '/jovenes/confirmacion' },
                { name: 'Post Confirmación', url: '/jovenes/post-confirmacion' },
                { name: 'Misión', url: '/jovenes/mision' }
            ],
            isOpen: false
        },
        {
            main: 'Iniciativas Solidarias',
            sublinks: [
                { name: 'Cáritas', url: '/iniciativas-solidarias/caritas' },
                { name: 'Proyectos de la Comunidad', url: '/iniciativas-solidarias/proyectos-de-la-comunidad' }
            ],
            isOpen: false
        }
    ])

    const toggleLink = (link) => {
        let newArr = [...links];
        if (newArr[link].isOpen) {
            newArr[link].isOpen = false;
            setLinks(newArr);
        } else {
            newArr[link].isOpen = true;
            setLinks(newArr);
        }
    }

    return (
        <>
            {/* DESKTOP NAVIGATION */}
            <ul className="navlinks__container desktop-navlinks">
                {links.map(link => {
                    return (
                        <li key={link.main} className={`navlink ${link.sublinks.length > 0 && 'navlink__dropdown'}`}>
                            {link.sublinks.length === 0
                                ?
                                <Link to={link.url}>{link.main}</Link>
                                :
                                <>
                                    {link.main}
                                    <div className="navlink__dropdown-container">
                                        {link.sublinks.map(sublink => {
                                            return (
                                                <Link to={sublink.url} key={sublink.name} className="navlink__dropdown-link">{sublink.name}</Link>
                                            )
                                        })}
                                    </div>
                                </>
                            }
                            {link.sublinks.length > 0 &&
                                <span><FontAwesomeIcon icon={faSortDown} /></span>
                            }
                        </li>
                    )
                })}
            </ul>

            {/* MOBILE NAVIGATION */}
            <ul className="mobile-navlinks">
                {links.map((link, index) => {
                    return (
                        <li key={link.main} className={`m-navlink ${link.sublinks.length > 0 && 'm-navlink__dropdown'}`}>
                            {link.sublinks.length === 0
                                ?
                                <Link to={link.url} onClick={props.toggleSidebar}>
                                    <div>
                                        {link.main}
                                    </div>
                                </Link>
                                :
                                <>
                                    <div className="m-navlink__dropdownLink" onClick={() => toggleLink(index)}>
                                        <span>
                                            {link.main}
                                            <FontAwesomeIcon icon={faSortDown} />
                                        </span>
                                    </div>
                                    {
                                        link.isOpen &&
                                        <div className="m-navlink__dropdown-container">
                                            {link.sublinks.map(sublink => {
                                                return (
                                                    <Link to={sublink.url} key={sublink.name} className="navlink__dropdown-link" onClick={props.toggleSidebar}>{sublink.name}</Link>
                                                )
                                            })}
                                        </div>
                                    }
                                </>
                            }
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default NavLinks;