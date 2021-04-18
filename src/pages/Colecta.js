import React from 'react';
import ColectaImg from '../assets/img/colecta_mp.jpg'

import './Colecta.css';
const Colecta = () => {
    return(
        <div className="main-section">
            <div className="main-section__container">
                <h1 className="main-section-title title">Colecta Virtual</h1>
                <div className="colecta__container">
                    <div className="main-section__content">
                        <p className="main-section-text">
                            Necesitamos de tu colaboración para seguir ayudando a nuestros hermanos de la Cava y de Gral. 
                            Rojo así como estar al día con los pagos de los gastos fijos de la Capilla. 
                            Si querés colaborar, podés hacerlo por transferencia bancaria o a través de Mercado Pago.
                        </p>
                        <h5>Datos Bancarios</h5>
                        <p>BBVA</p>
                        <p>Alias: <span style={{textTransform: 'uppercase', color: '#76323F', fontSize: 20, fontWeight: 700}}>CAPILLA.MARIN</span></p>
                        <p>CBU: 0170154420000001070376</p>
                        <p>CUIT: 30609906738</p>
                        <p>CC $: 154-010703/7</p>
                        <p>RS: Obispado de San Isidro</p>
                    </div>
                    <div className="main-section__content thks-msg__container">
                        <div className="thks-msg">
                            Muchas Gracias!
                        </div>
                    </div>
                    <div className="main-section__content main-content-img qr-img__container">
                        <img src={ColectaImg} alt="Codigo QR Mercadopago Capilla Marin" className="qr-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Colecta;