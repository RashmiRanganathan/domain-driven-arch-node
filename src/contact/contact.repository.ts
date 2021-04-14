import { ContactDocument, ContactModel } from './contact.model';
import { Contact } from './contact.type';
import { escapeRegExp } from 'lodash';

export const convertContactDocumentToContact = (
  document: ContactDocument
): Contact => document.toObject({ getters: true }) as Contact;

const create = async (contact: Contact): Promise<Contact> => {
  const document = await ContactModel.create(contact);
  return convertContactDocumentToContact(document);
};

const getContacts = async (name?: string): Promise<Contact[]> => {
  const orParams = [
    {
      name: {
        $regex: escapeRegExp(name),
        $options: 'i'
      }
    }
  ];

  const documentList =
    orParams.length === 0
      ? await ContactModel.find()
      : await ContactModel.find()
          .or(orParams)
          .exec();
  return documentList.map(convertContactDocumentToContact);
};

const getContactDetail = async (contactId: string): Promise<Contact | null> => {
  try {
    const document = await ContactModel.findOne({
      contactId
    });
    if (document == null) {
      return null;
    }
    return convertContactDocumentToContact(document);
  } catch (error) {
    throw error;
  }
};

const ContactRepository = { create, getContactDetail, getContacts };

export default ContactRepository;
