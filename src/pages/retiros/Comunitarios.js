import React from 'react';
import StandardSection from '../../components/StandardSection';

import Comunitarios1 from '../../assets/img/comunitarios/retiros-comunitarios-1.JPG';

const Comunitarios = () => {
    return (
        <StandardSection
            title="Retiros Comunitarios"
            textOrHtml={["En distintos momentos a lo largo del año se ofrecen encuentros o retiros."]}
            contactInfo={true}
            imgs={[Comunitarios1]}
            category="retiros comunitarios"
        />
    )
}

export default Comunitarios;