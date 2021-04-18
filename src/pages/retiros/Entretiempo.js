import React from 'react';
import StandardSection from '../../components/StandardSection';

import Entretiempo1 from '../../assets/img/entretiempo/entretiempo-1.JPG';

const Entretiempo = () => {
    return (
        <StandardSection
            title="Entretiempo"
            textOrHtml={["Es un retiro orientado a varones en la mitad de la vida que está enfocado en una revisión de la propia vida a la luz de la espiritualidad y la fe cristianas. Se ofrecen tres retiros anuales, y diversas actividades que prolongan lo vivido en pequeñas comunidades."]}
            contactInfo={true}
            contactName='Eduardo Bustos'
            imgs={[Entretiempo1]}
            category="entretiempo"
        />
    )
}

export default Entretiempo;