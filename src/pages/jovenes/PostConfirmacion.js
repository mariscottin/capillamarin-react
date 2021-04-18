import React from 'react';
import StandardSection from '../../components/StandardSection';

import PostConfirmacion1 from '../../assets/img/post-confir/post-confir-1.jpg';
import PostConfirmacion2 from '../../assets/img/post-confir/post-confir-2.jpg';
import PostConfirmacion3 from '../../assets/img/post-confir/post-confir-3.jpg';

const PostConfirmacion = () => {
    return (
        <StandardSection
            title="Post Confirmación"
            textOrHtml={["Un espacio que continúa la experiencia de inmersión en la espiritualidad cristiana, para adolescentes ya conofirmados. Nos reunimos los domingos a las 17 hs."]}
            contactInfo={true}
            contactName='Pipe Caride'
            imgs={[PostConfirmacion1, PostConfirmacion2, PostConfirmacion3]}
            category="post confirmacion"
        />
    )
}

export default PostConfirmacion;