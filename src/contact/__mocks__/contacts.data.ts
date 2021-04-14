import { NewContact, Account, Contact } from '../contact.type';

export const fooNewContact: NewContact = {
  name: 'foo',
  imageUrl: 'http://google.com',
  accounts: [
    {
      identifier: '123'
    }
  ]
};

export const barNewContact: NewContact = {
  name: 'bar',
  accounts: [
    {
      identifier: '456'
    }
  ]
};

export const fooAccount: Account = {
  accountId: '386fcca2-aa09-11ea-8b95-5dea51ada413',
  identifier: '123'
};

export const barAccount: Account = {
  accountId: '386fcca2-aa09-11ea-8b95-5dea51ada414',
  identifier: '456'
};

export const fooContact: Contact = {
  ...fooNewContact,
  contactId: '386fcca0-aa09-11ea-8b95-5dea51ada413',
  imageUrl: 'http://google.com',
  accounts: [fooAccount]
};

export const barContact: Contact = {
  ...barNewContact,
  contactId: '386fcca0-aa09-11ea-8b95-5dea51ada414',
  imageUrl: 'http://google.com',
  accounts: [barAccount]
};
