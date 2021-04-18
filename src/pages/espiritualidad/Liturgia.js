import React from 'react';
import StandardSection from '../../components/StandardSection';

import Liturgia1 from '../../assets/img/liturgia/liturgia-1.jpeg';
import Liturgia2 from '../../assets/img/liturgia/liturgia-2.jpeg';
import Liturgia3 from '../../assets/img/liturgia/liturgia-3.jpeg';

const Liturgia = () => {
    return (
        <StandardSection
            title="Liturgia y Espiritualidad"
            textOrHtml={[
                "El encuentro con Dios celebrado en comunidad se nutre del trabajo de muchos que preparan las misas, las lecturas, y todos los detalles que hacen cada momento especial. Si querés participar, contactate con María Mariscotti:",
                <br />,
                <a href="mailto:fliamariscotti@gmail.com">fliamariscotti@gmail.com</a>
            ]}
            contactInfo={false}
            imgs={[Liturgia1, Liturgia2, Liturgia3]}
            category="liturgia"
        />
    )
}

export default Liturgia;