import React from 'react';
import StandardSection from '../../components/StandardSection';

import Ministros1 from '../../assets/img/ministros/ministros-1.jpeg';

const Ministros = () => {
    return (
        <StandardSection
            title="Ministros"
            textOrHtml={["Además de distribuir la comunión durante las misas, los ministros de la eucaristía exponen el santísimo en momentos de adoración, llevan la comunión a enfermos y dirigen momentos de oración comunitaria."]}
            contactInfo={true}
            contactName="Ernesto Calello"
            imgs={[Ministros1]}
            category="ministros"
        />
    )
}

export default Ministros;