import { Contact } from "./contact.type";

// In-memory cache. Need to replace it with a database call.
const contacts = new Map<string, Contact>();

const create = async (contact: Contact): Promise<Contact | undefined> => {
  if (!contacts.has(contact.id)) {
    const newContact = { ...contact };
    contacts.set(contact.id, contact);

    return newContact;
  }
  return undefined;
};

const get = async (contactId: string): Promise<Contact | undefined> => {
  if (contacts.has(contactId)) {
    return contacts.get(contactId);
  }
  return undefined;
};

const remove = async (contactId: string): Promise<Contact | undefined> => {
  if (contacts.has(contactId)) {
    const contact = contacts.get(contactId);
    contacts.delete(contactId);
    return contact;
  }
  return undefined;
};

const clear = async (): Promise<void> => {
  contacts.clear();
};

const ContactRepository = { create, get, remove, clear };
export default ContactRepository;
