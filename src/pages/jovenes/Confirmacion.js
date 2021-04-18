import React from 'react';
import StandardSection from '../../components/StandardSection';

import Confirmacion1 from '../../assets/img/confirmacion/confirmacion-1.jpg';
import Confirmacion2 from '../../assets/img/confirmacion/confirmacion-2.jpg';
import Confirmacion3 from '../../assets/img/confirmacion/confirmacion-3.jpg';

const Confirmacion = () => {
    return (
        <StandardSection
            title="Confirmación"
            textOrHtml={["Encuentros semanales (de marzo a noviembre) enfocado en adolescentes que quieren recibir el sacramento de la confirmación. Nos juntamos los domingos a las 17 hs."]}
            contactInfo={true}
            contactName='Vicky Saguier y Juan Miles'
            imgs={[Confirmacion1, Confirmacion2, Confirmacion3]}
            category="confirmacion"
        />
    )
}

export default Confirmacion;