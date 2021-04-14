import mongoose, { Schema, Model, Document } from 'mongoose';
import { CONTACT_CONSTRAINT } from './contact.constant';
import { Contact } from './contact.type';

export type ContactDocument = Contact & Document;
export const collectionName = 'contacts';

const contactSchema = new Schema({
  contactId: {
    type: String,
    unique: true,
    required: true,
    maxlength: CONTACT_CONSTRAINT.contactId.maxLength
  },
  name: {
    type: String,
    unique: true,
    required: true,
    maxlength: CONTACT_CONSTRAINT.name.maxLength
  },
  imageUrl: {
    type: String,
    maxLength: CONTACT_CONSTRAINT.imageUrl.maxLength
  },
  accounts: [
    {
      accountId: {
        type: String,
        unique: true,
        required: true,
        maxlength: CONTACT_CONSTRAINT.account.accountId.maxLength
      },
      identifier: {
        type: String,
        required: true,
        maxLength: CONTACT_CONSTRAINT.account.identifier.maxLength
      }
    }
  ]
});

export const ContactModel: Model<ContactDocument> = mongoose.model(
  collectionName,
  contactSchema
);
