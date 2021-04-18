import React from 'react';
import StandardSection from '../../components/StandardSection';

import Premat1 from '../../assets/img/pre-matrimonial/prematrimonial-1.jpg';

const CursosPremat = () => {
    return (
        <StandardSection
            title="Cursos Prematrimoniales"
            textOrHtml={["Una serie de encuentros coordinados por matrimonios de la comunidad para reflexionar sobre las dimensiones más profundas del proyecto que están por emprender."]}
            contactInfo={true}
            imgs={[Premat1]}
            category="cursos prematrimoniales"
        />
    )
}

export default CursosPremat;