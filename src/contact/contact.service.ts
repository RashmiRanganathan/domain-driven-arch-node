import Boom from "boom";
import { Contact } from "./contact.type";
import ContactRepository from "./contact.repository";

const create = async (contact: Contact): Promise<Contact> => {
  const result = await ContactRepository.create(contact);

  if (!result) {
    throw Boom.badRequest(`Contact already exists: ${contact.id}`);
  }

  return result;
};

const get = async (contactId: string): Promise<Contact> => {
  const result = await ContactRepository.get(contactId);

  if (!result) {
    throw Boom.notFound();
  }

  return result;
};

const remove = async (contactId: string): Promise<void> => {
  await ContactRepository.remove(contactId);
};

const contactService = { create, get, remove };
export default contactService;
