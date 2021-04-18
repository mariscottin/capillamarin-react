import React from 'react';
import StandardSection from '../../components/StandardSection';

import Reconciliaciones1 from '../../assets/img/reconciliacion/reconciliacion-1.jpg';
import Reconciliaciones2 from '../../assets/img/reconciliacion/reconciliacion-2.jpg';
import Reconciliaciones3 from '../../assets/img/reconciliacion/reconciliacion-3.jpg';

const Reconciliaciones = () => {
    return (
        <StandardSection
            title="Reconciliaciones y Charlas Espirituales"
            textOrHtml={["Pedir cita con el sacerdote:"]}
            contactInfo={true}
            imgs={[Reconciliaciones1, Reconciliaciones2, Reconciliaciones3]}
            category="reconciliaciones"
        />
    )
}

export default Reconciliaciones;