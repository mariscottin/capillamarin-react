import React from 'react';
import StandardSection from '../../components/StandardSection';

import Adoracion1 from '../../assets/img/adoracion/adoracion-1.jpeg';
import Adoracion2 from '../../assets/img/adoracion/adoracion-2.jpeg';
import Adoracion3 from '../../assets/img/adoracion/adoracion-3.jpeg';

const Adoracion = () => {
    return (
        <StandardSection
            title="Adoración"
            textOrHtml={[
                "El modo tradicional de oración de silencio ante la presencia de Jesús en el pan consagrado tiene un protagonismo importante en la vida de la capilla. En período escolar, de lunes a viernes entre las 7 y las 19:20hs, y los jueves de 7 a 19:00hs, el Santísimo está expuesto para todo aquel que quiera visitarlo. Quien quiera asumir un horario fijo, puede anotarse en la grilla contactándose con Victoria Porzio:",
                <br />,
                <a href="mailto:victoriaporzio@hotmail.com}">victoriaporzio@hotmail.com</a>
            ]}
            contactInfo={false}
            imgs={[Adoracion1, Adoracion2, Adoracion3]}
            category="adoracion"
        />
    )
}

export default Adoracion;