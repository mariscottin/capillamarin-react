import React from 'react';
import StandardSection from '../../components/StandardSection';

import Proyectos1 from '../../assets/img/proyectos/proyectos-1.jpg';
import Proyectos2 from '../../assets/img/proyectos/proyectos-2.jpg';

const ProyectosComunidad = () => {
    return (
        <StandardSection
            title="Proyectos de la Comunidad"
            textOrHtml={[
                <ul style={{ paddingLeft: 0 }}>
                    <li><b>Catequesis en la Cava:</b> El colegio Santo Domingo Savio de la parroquia Nuestra Señora de la Cava necesita nuestro apoyo económico para que los niños reciban catequesis. Interesados en colaborar contactarse con<br /><a href="mailto:desarrollo@colegiodomingosavio.edu.ar" style={{ fontSize: 14 }}>desarrollo@colegiodomingosavio.edu.ar</a></li>
                    <li><b>Acompañamientos a familias de la Cava:</b> Nos sumamos a Caritas parroquial para fortalecer los vínculos con algunas familias del barrio a través de visitas y diversos encuentros y actividades.</li>
                    <li><b>Tutorías para jóvenes:</b> Algunos adolescentes del colegio santo Domingo Savio terminan la cursada adeudando materias. Un grupo de voluntarios hacen de nexo con los profesores para motivarlos a que rindan las materias y reciban su título secundario.</li>
                    <li><b>La Cueva:</b> Un grupo de voluntarios de Entretiempo se encarga de apuntalar un club de fútbol autogestionado de gente del barrio Santa Rita (Boulogne) dedicado a contener niños en riesgo a través del deporte. Contacto: Martín Mezzini.</li>
                </ul>
            ]}
            contactInfo={true}
            imgs={[Proyectos1, Proyectos2]}
            category="proyectos de la comunidad"
        />
    )
}

export default ProyectosComunidad;