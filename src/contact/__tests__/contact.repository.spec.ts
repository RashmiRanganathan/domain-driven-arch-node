import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import Contact from '../contact.type';
import contactRepository from '../contact.repository';
import { ContactModel } from '../contact.model';
import { fooContact, barContact } from '../__mocks__/contacts.data';

describe('contact repository', () => {
  let mongod: MongoMemoryServer;
  beforeAll(async () => {
    mongod = new MongoMemoryServer();
    const mongoDbUri = await mongod.getConnectionString();
    await mongoose.connect(mongoDbUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
  });
  afterAll(async () => {
    mongoose.disconnect();
    mongod.stop();
  });

  beforeEach(async () => {
    await ContactModel.deleteMany({});
  });

  describe('create', () => {
    it('should create contact', async () => {
      const contact: Contact = { ...fooContact };

      const savedContact = await contactRepository.create(contact);

      expect(savedContact).toMatchObject(contact);
    });
  });

  describe('getContacts', () => {
    it('returns empty list if no saved contacts', async () => {
      const expectedContacts = [];

      const contacts = await contactRepository.getContacts();

      expect(contacts).toEqual(expectedContacts);
    });

    it('return all contacts when empty search', async () => {
      const foo = { ...fooContact };
      const bar = { ...barContact };
      const savedFoo = await contactRepository.create(foo);
      const savedBar = await contactRepository.create(bar);

      const expectedContacts = [savedBar, savedFoo];

      const contacts = await contactRepository.getContacts();

      expect(contacts).toEqual(expectedContacts);
    });

    it('return only match contacts when search apply', async () => {
      const foo = { ...fooContact };
      const bar = { ...barContact };
      const savedFoo = await contactRepository.create(foo);
      await contactRepository.create(bar);

      const expectedContacts = [savedFoo];

      const contacts = await contactRepository.getContacts('fo');

      expect(contacts).toEqual(expectedContacts);
    });
  });
});
