import React, { useState, useEffect } from 'react';
import db from '../firebase';
import SideBanner from './SideBanner';
import Card from './Card';

import './HomeContent.css';

const HomeContent = () => {
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        db.collection('novedades').orderBy("date", "desc").limit(3).onSnapshot(snapshot => (
            setNovedades(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, []);

    return (
        <div className="home-content">
            <div className="home-content__container">
                <div className="novedades__container">
                    <h1 className="title">NOVEDADES</h1>
                    <div className="novedades-cards__container">
                        {novedades.map(nov => (
                            <Card key={nov.id} imgs={nov.data.img} title={nov.data.title} body={nov.data.body} id={nov.id} />
                        ))}
                    </div>
                </div>
                <div className="sidebanner__container">
                    <SideBanner />
                </div>
            </div>
        </div>
    )
}

export default HomeContent;