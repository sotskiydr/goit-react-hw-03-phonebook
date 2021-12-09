import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';

const ContactsList = ({ renderContacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {renderContacts.map(el => {
        return (
          <li className={styles.item} key={el.id}>
            <span className={styles.span}>
              {el.name}: {el.number}
            </span>
            <button
              className={styles.btn}
              type="button"
              id={el.id}
              onClick={() => {
                deleteContact(el.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  renderContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
