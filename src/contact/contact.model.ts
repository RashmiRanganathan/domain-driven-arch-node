import mongoose, { Schema, Model, Document } from "mongoose";
import { Contact } from "./contact.type";

export type ContactDocument = Contact & Document;
export const collectionName = "contacts";

const contactSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
    maxlength: 50,
  },
  name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  phoneNumber: [
    {
      type: Number,
      required: true,
      minlength: 10,
      maxlength: 12,
    },
  ],
});

export const ContactModel: Model<ContactDocument> = mongoose.model(
  collectionName,
  contactSchema
);
