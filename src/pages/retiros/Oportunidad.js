import React from 'react';
import StandardSection from '../../components/StandardSection';

import Oportunidad1 from '../../assets/img/oportunidad/oportunidad-1.JPG';

const Oportunidad = () => {
    return (
        <StandardSection
            title="Oportunidad"
            textOrHtml={["Es un retiro orientado a mujeres en la mitad de la vida que está enfocado en una revisión de la propia vida a la luz de la espiritualidad y la fe cristianas. Se ofrecen dos retiros anuales, y diversas actividades que prolongan lo vivido en pequeñas comunidades."]}
            contactInfo={true}
            contactName='Eduardo Bustos'
            imgs={[Oportunidad1]}
            category="oportunidad"
        />
    )
}

export default Oportunidad;