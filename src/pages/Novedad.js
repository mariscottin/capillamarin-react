import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from 'react-router-dom';

import ImageModal from '../components/ImageModal';
import Carousel from 'react-bootstrap/Carousel';

import db from '../firebase';

import './Novedad.css';

function Novedad() {
    const { nid } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [novedad, setNovedad] = useState();
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [showImageModal, setShowImageModal] = useState(false);


    const imgModalOpen = (img) => {
        setShowImageModal(img);
        document.querySelector('body').classList.add('modal-open-overflow');
    }
    const imgModalClose = () => {
        setShowImageModal(false);
        document.querySelector('body').classList.remove('modal-open-overflow');
    }

    const handleCarouselIndexSelect = (selectedIndex, e) => {
        setCarouselIndex(selectedIndex);
    };

    useEffect(() => {
        setIsLoading(true);
        db.collection("novedades").doc(nid).get()
            .then((novedad) => setNovedad({
                id: novedad.id,
                data: novedad.data()
            }))
            .then(() => setIsLoading(false))
            .catch(err => {
                setIsLoading(false);
                alert("Hubo un error cargando la información. Por favor intente nuevamente más tarde.");
                console.log(err);
            })
    }, [nid]);
    return (
        <div className="novedadPage">

            {showImageModal &&
                <ImageModal img={showImageModal} alt={novedad?.data.title} onClick={imgModalClose} />
            }

            {isLoading &&
                <div className="loadingSpinner__container">
                    <ReactLoading type='spin' color='#76323F' height={220} width={110} />
                </div>
            }
            {(!isLoading && novedad) &&
                <>
                    <h1>{novedad?.data.title}</h1>
                    <p>{novedad?.data.body}</p>

                    <div className="novedadPage__images">
                        {novedad?.data.img.length === 1 &&
                            <img src={novedad?.data.img[0]} alt={`${novedad?.data.title}-img`} onClick={() => imgModalOpen(novedad?.data.img[0])} />
                        }
                        {novedad?.data.img.length > 1 &&
                            <Carousel activeIndex={carouselIndex} onSelect={handleCarouselIndexSelect} interval={4000}>
                                {novedad?.data.img.map((img, i) => (
                                    <Carousel.Item key={i}>
                                        <img src={img} alt={`${novedad?.data.title}-${i + 1}`} onClick={() => imgModalOpen(img)} />
                                    </Carousel.Item>

                                ))}
                            </Carousel>
                        }
                    </div>

                </>
            }
        </div>
    )
}

export default Novedad
