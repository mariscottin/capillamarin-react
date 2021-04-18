import React from 'react';
import StandardSection from '../../components/StandardSection';

import Circulos1 from '../../assets/img/circulos/circulos-1.jpg';

const CirculosOracion = () => {
    return (
        <StandardSection
            title="Círculos de Oración"
            textOrHtml={["Distintas comunidades estables de oración que desde hace años se juntan en el ámbito del colegio o capilla para alimentar su vida de fe."]}
            contactInfo={true}
            imgs={[Circulos1]}
            category="circulos de oracion"
        />
    )
}

export default CirculosOracion;