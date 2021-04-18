import React from 'react';
import StandardSection from '../../components/StandardSection';

import Visitas1 from '../../assets/img/enfermos/enfermos-1.jpg';
import Visitas2 from '../../assets/img/enfermos/enfermos-2.jpg';


const VisitasEnfermos = () => {
    return (
        <StandardSection
            title="Visitas a Enfermos"
            textOrHtml={["Un grupo de ministros de la eucaristía se dedica a visitar enfermos y acercarles la comunión con cierta frecuencia. Cualquier interesado deberá comunicarse con:"]}
            contactInfo={true}
            imgs={[Visitas1, Visitas2]}
            category="visitas a enfermos"
        />
    )
};

export default VisitasEnfermos;