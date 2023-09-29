import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContacts = createAction('contacts/addContact', contact => {
  return {
    payload: {
      id: nanoid(),
      contact,
    },
  };
});

export const deleteContact = createAction(
  'contacts/deleteContact',
  contactId => {
    return {
      type: 'contacts/deleteContact',
      payload: contactId,
    };
  }
);

export const getFilterContacts = createAction(
  'filter/getFilterContacts',
  value => {
    return {
      type: 'filters/getFilterContacts',
      payload: value,
    };
  }
);
