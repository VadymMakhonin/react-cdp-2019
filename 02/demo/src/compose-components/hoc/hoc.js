import React from 'react';

export const NoResultsHoc = WrappedComponent => {
    return class LoadingClass extends React.Component {
        render() {
            const filteredContacts = this.props.contacts.filter((contact) =>
                `${contact.name.first} ${contact.name.last}`
                    .includes(this.props.filterText)
            );

            if (!filteredContacts.length) {
                return <div>No results</div>;
            }

            return <WrappedComponent {...this.props} contacts={filteredContacts}/>;
        }
    };
};