import { v1 as uuidv1 } from 'uuid';
import contactRepository from '../contact.repository';
import Contact, { NewContact } from '../contact.type';
import contactService from '../contact.service';
import {
  fooContact,
  fooNewContact,
  fooAccount
} from '../__mocks__/contacts.data';

jest.mock('../contact.repository');
jest.mock('uuid');

describe('contact service', () => {
  describe('create', () => {
    it('should create contact', async () => {
      const contact: NewContact = { ...fooNewContact };
      const expectedContact: Contact = { ...fooContact };
      const contactId = expectedContact.contactId;
      const accountId = fooAccount.accountId;
      (contactRepository.create as jest.Mock).mockResolvedValueOnce({
        ...expectedContact
      });
      (uuidv1 as jest.Mock)
        .mockReturnValueOnce(accountId)
        .mockReturnValueOnce(contactId);

      const savedContact = await contactService.create(contact);

      expect(contactRepository.create).toBeCalledWith(expectedContact);
      expect(savedContact).toEqual(expectedContact);
    });
  });

  describe('getContacts', () => {
    it('returns list of contacts', async () => {
      const expectedContactList: Contact[] = [{ ...fooContact }];
      (contactRepository.getContacts as jest.Mock).mockResolvedValueOnce(
        expectedContactList
      );

      const contactList = await contactService.getContacts();

      expect(contactRepository.getContacts).toBeCalled();
      expect(contactList).toEqual(expectedContactList);
    });
  });
});
