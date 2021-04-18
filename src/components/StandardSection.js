import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NovedadesList from './NovedadesList';
import db from '../firebase';

import './StandardSection.css';


const StandardSection = props => {
    const [novedades, setNovedades] = useState([]);


    useEffect(() => {
        const novedadesRef = db.collection("novedades");
        const categoryRef = novedadesRef.where('category', '==', props.category)
        categoryRef.onSnapshot(snapshot => (
            setNovedades(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [props.category]);

    return (
        <div className="main-section">
            <div className="main-section__container">
                <h1 className="main-section-title title">{props.title}</h1>
                <div className="main-section-content__container">
                    <div className="main-section__content">
                        <p className="main-section-text">
                            {props.textOrHtml.map((text, i) => {
                                return (
                                    <span key={i}>{text}</span>
                                )
                            })}
                        </p>
                        {props.contactInfo &&
                            <>
                                <h5>Contacto:</h5>
                                {props.contactName &&
                                    <p>{props.contactName}</p>
                                }
                                <p>011 4743-0028 (int. 312)</p>
                                <a href="mailto:infocapilla@marin.edu.ar">infocapilla@marin.edu.ar</a>
                            </>
                        }
                    </div>
                    <div className="main-section__content main-content-img">
                        {props.imgs.length > 1
                            ?
                            <Carousel interval={2000}>
                                {props.imgs.map((img, index) => {
                                    return (
                                        <Carousel.Item key={index}>
                                            <img src={img} alt={`${props.title} Foto ${index + 1}`} />
                                        </Carousel.Item>
                                    )
                                })}
                            </Carousel>
                            :
                            <img src={props.imgs[0]} alt={`${props.title} Foto`} />
                        }
                    </div>
                </div>
            </div>
            {novedades.length > 0 &&
                <div className="standardSection__novedades">
                    <h3>Novedades</h3>
                    <NovedadesList novedades={novedades} />
                </div>
            }
        </div>
    )
}

export default StandardSection;