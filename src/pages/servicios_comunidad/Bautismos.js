import React from 'react';
import StandardSection from '../../components/StandardSection';

import Bautismos1 from '../../assets/img/bautismos/bautismos-1.jpeg';
import Bautismos2 from '../../assets/img/bautismos/bautismos-2.jpeg';


const Bautismos = () => {
    return (
        <StandardSection
            title="Bautismos"
            textOrHtml={["Se celebran los primeros domingos del mes por la tarde. Los padres deberán acercarse a la secretaría con el DNI del niño con dos semanas de anticipación."]}
            contactInfo={true}
            imgs={[Bautismos1, Bautismos2]}
            category="bautismos"
        />
    )
}

export default Bautismos;