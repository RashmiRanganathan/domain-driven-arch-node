import { v1 as uuidv1 } from 'uuid';
import ContactRepository from './contact.repository';
import { NewContact, Account, Contact } from './contact.type';
import { AppError } from '../errors/AppError';
import { ERROR_CODE } from '../common/errors';

const stripUnusedFields = (contact: Contact): Contact => {
  const accounts = contact.accounts.map(account => ({
    accountId: account.accountId,
    identifier: account.identifier
  }));

  return {
    contactId: contact.contactId,
    name: contact.name,
    imageUrl: contact.imageUrl,
    accounts
  };
};

const create = async (contact: NewContact): Promise<Contact> => {
  const accountsWithId: Account[] = contact.accounts.map(account => ({
    ...account,
    accountId: uuidv1()
  }));

  const contactWithId: Contact = {
    ...contact,
    contactId: uuidv1(),
    accounts: accountsWithId
  };

  const savedContact = await ContactRepository.create(contactWithId);
  return stripUnusedFields(savedContact);
};

const getContacts = async (searchStr?: string): Promise<Contact[]> => {
  const contactList = await ContactRepository.getContacts(searchStr);
  return contactList.map(stripUnusedFields);
};

const getContactDetail = async (contactId: string): Promise<Contact> => {
  const contact = await ContactRepository.getContactDetail(contactId);
  if (contact == null) {
    throw new AppError(ERROR_CODE.CONTACT_NOT_FOUND);
  }
  return stripUnusedFields(contact);
};

const contactService = { create, getContacts, getContactDetail };
export default contactService;
