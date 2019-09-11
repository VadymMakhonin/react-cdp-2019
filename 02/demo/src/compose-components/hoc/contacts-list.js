import React from 'react';
import {NoResultsHoc} from './hoc';

const ContactListComponent = ({contacts}) => {
    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.email}>
                    <img src={contact.picture.thumbnail} role="presentation"/>
                    <div className="contactData">
                        <strong>{contact.name.first} {contact.name.last}</strong>
                        <br/>
                        <small>{contact.email}</small>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export const ContactList = NoResultsHoc(ContactListComponent);