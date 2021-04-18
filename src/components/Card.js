import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ImageModal from './ImageModal';
import Carousel from 'react-bootstrap/Carousel';
import './Card.css';

const Card = (props) => {
    const history = useHistory();
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [textToDisplay, setTextToDisplay] = useState(props.body);
    const [viewText, setViewText] = useState(' ver más');
    const [showImageModal, setShowImageModal] = useState(false);

    const shortenText = useCallback(() => {
        const newText = props.body.substr(0, 136);
        const finalText = newText.concat('...');
        setTextToDisplay(finalText);
    }, [props.body]);

    const toggleTextLength = () => {
        if (textToDisplay.length <= 139) {
            setTextToDisplay(props.body);
            setViewText(' ver menos')
        } else {
            shortenText();
            setViewText(' ver más');
        }
    }

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

    const redirectToNovedad = (nid) => {
        history.push(`/novedad/${nid}`)
    }

    useEffect(() => {
        if (props.body.length > 136) {
            shortenText()
        }
    }, [props.body, shortenText])

    return (
        <>
            {showImageModal &&
                <ImageModal img={showImageModal} alt={props.title} onClick={imgModalClose} />
            }

            <div className="custom-card">
                <div className="card-img" >
                    {props.imgs.length === 1 &&
                        <img src={props.imgs[0]} alt={props.title} onClick={() => imgModalOpen(props.imgs[0])} className="card-img__image" />
                    }
                    {props.imgs.length > 1 &&
                        <Carousel activeIndex={carouselIndex} onSelect={handleCarouselIndexSelect} interval={100000000}>
                            {props.imgs.map((img, i) => (
                                <Carousel.Item key={i}>
                                    <img src={img} alt={`${props.title}-$${i + 1}`} onClick={() => imgModalOpen(img)} className="card-img__image" />
                                </Carousel.Item>

                            ))}
                        </Carousel>
                    }
                </div>

                <div className="card-body">
                    <h4>{props.title}</h4>
                    <p>{textToDisplay}{textToDisplay.length > 136 && <span className="blue-link" onClick={toggleTextLength}>{viewText}</span>}</p>
                </div>
                <div className="card-footer">
                    <p className="blue-link" onClick={() => redirectToNovedad(props.id)}>Ver Novedad</p>
                </div>
            </div>

        </>
    )
}

export default Card;