import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {
    
    const defaultContact = new Contact('Luis', 'Franco', '1234@gmail', false);

    return (
        <div>
            <div>
                <h1>Tus contactos:</h1>
            </div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
