import React from 'react';
import StandardSection from '../../components/StandardSection';

import Caritas1 from '../../assets/img/caritas/caritas-1.jpg';
import Caritas2 from '../../assets/img/caritas/caritas-2.jpg';
import Caritas3 from '../../assets/img/caritas/caritas-3.jpg';

const Caritas = () => {
    return (
        <StandardSection
            title="Cáritas"
            textOrHtml={["Es la cara visible de la caridad de la comunidad, y se encarga de animar dentro de la capilla la solidaridad con distintas campañas puntuales o proyectos a largo plazo."]}
            contactInfo={true}
            imgs={[Caritas1, Caritas2, Caritas3]}
            category="caritas"
        />
    )
}

export default Caritas;