import React from 'react';
import StandardSection from '../../components/StandardSection';

import Coro1 from '../../assets/img/coro/coro-1.jpg';
import Coro2 from '../../assets/img/coro/coro-2.jpeg';
import Coro3 from '../../assets/img/coro/coro-3.jpeg';

const Coro = () => {
    return (
        <StandardSection
            title="Coro"
            textOrHtml={["Si querés participar, contactate con:"]}
            contactInfo={true}
            contactName="Tata Recondo"
            imgs={[Coro1, Coro2, Coro3]}
            category="coro"
        />
    )
}

export default Coro;