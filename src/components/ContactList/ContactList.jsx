import { useDispatch, useSelector } from 'react-redux';
import { List, ContactItem, ButtonDel } from './ContactList_styled';
import { getContacts, getFilter } from '../Redux/constants';
import { deleteContact } from '../Redux/ContactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);

  const getVisibleContacts = (contacts, filters) => {
    return contacts.filter(contact => {
      contact.name.toLowerCase().includes(filters.toLowerCase());
    });
  };

  const visibleContacts = getVisibleContacts(contacts, filters);

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id}>
          <>
            {contact.name} : {contact.number}
          </>
          <ButtonDel
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </ButtonDel>
        </ContactItem>
      ))}
    </List>
  );
};
