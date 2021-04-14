import {
  contactIdInputParamValidator,
  contactListQueryValidator
} from './contact.validator';
import * as Joi from '@hapi/joi';
import 'joi-extract-type';
interface NewAccount {
  identifier: string;
}

export interface Account extends NewAccount {
  accountId: string;
}

export interface NewContact {
  name: string;
  imageUrl?: string;
  accounts: NewAccount[];
}

interface Contact extends NewContact {
  contactId: string;
  name: string;
  imageUrl?: string;
  accounts: Account[];
}

interface IGetContactRequest {
  params: IContactRequestParams;
}

type IContactRequestParams = Joi.extractType<
  typeof contactIdInputParamValidator
>;

export type ContactListRequest = Joi.extractType<
  typeof contactListQueryValidator
>;

export interface IContactListRequest {
  query: ContactListRequest;
}

export { Contact, IGetContactRequest };
