import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h3>
                Apellino: { contact.surname }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <h5>
                Este contacto está: { contact.completed ? 'EN LÍNEA': 'NO DISPONIBLE' }
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
