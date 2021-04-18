import React from 'react';
import StandardSection from '../../components/StandardSection';

import VFyC1 from '../../assets/img/vfyc/vfyc-1.jpg';
import VFyC2 from '../../assets/img/vfyc/vfyc-2.jpg';

const CiclosConferencias = () => {
    return (
        <StandardSection
            title="Ciclos de Conferencias, Vida, Fe y Cultura"
            textOrHtml={["Es una serie de conferencias quincenales que nos invitan a abrirnos a la complejidad de la vida actual desde la cultura, la filosofía, la teología, el arte, etc. Días de reunión: miércoles cada 15 días, de 20:15 a 22:00."]}
            contactInfo={true}
            contactName={'Marcela Fiala'}
            imgs={[VFyC1, VFyC2]}
            category="ciclos de conferencias"
        />
    )
}

export default CiclosConferencias;