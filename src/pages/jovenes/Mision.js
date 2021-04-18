import React from 'react';
import StandardSection from '../../components/StandardSection';

import Mision1 from '../../assets/img/mision/mision-1.jpg';
import Mision2 from '../../assets/img/mision/mision-2.jpg';
import Mision3 from '../../assets/img/mision/mision-3.jpg';

const Mision = () => {
    return (
        <StandardSection
            title="Misión"
            textOrHtml={["Una parte fundamental de la vida cristiana es salir al encuentro del otro. El grupo de misión lleva adelante visitas a pueblos del interior durante las vacaciones de invierno y verano, además de otros proyectos que surgen a lo largo del año."]}
            contactInfo={true}
            imgs={[Mision1, Mision2, Mision3]}
            category="mision"
        />
    )
}

export default Mision;