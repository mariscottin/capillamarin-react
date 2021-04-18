import React from 'react';
import StandardSection from '../../components/StandardSection';

import Meditacion1 from '../../assets/img/meditacion/meditacion-1.jpg';

const Meditacion = () => {
    return (
        <StandardSection
            title="Meditación Cristiana"
            textOrHtml={["Un pequeño grupo siguiendo el método de John Main y Lawrence Freeman. Para participar, contactarse con:"]}
            contactInfo={true}
            contactName="Federico Endler"
            imgs={[Meditacion1]}
            category="meditacion"
        />
    )
}

export default Meditacion;