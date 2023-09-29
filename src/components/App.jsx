import { ContactForm } from './ContactsForm/ContactForm';
import { ContactsList } from './ContactList/ContactList';
import { Layout, Subtitle, Title } from './Layout';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactsList />
    </Layout>
  );
};
