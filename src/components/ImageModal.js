import React from 'react';
import ReactDom from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './ImageModal.css';

const ImageModal = (props) => {
    const image =
        <div className="image-modal">
            <div className="image-modal__container">
                <div className="close-img-icon" onClick={props.onClick}><FontAwesomeIcon icon={faTimes} /></div>
                <img src={props.img} alt={props.alt} />
            </div>
        </div>
    return ReactDom.createPortal(image, document.getElementById('image-hook'));
}

export default ImageModal;