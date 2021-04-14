import * as Joi from '@hapi/joi';
import hapi from '@hapi/hapi';
import 'joi-extract-type';
import { CONTACT_CONSTRAINT, NULL_CONSTRAINT } from './contact.constant';

const newAccountSchema = Joi.object({
  identifier: Joi.string()
    .required()
    .max(CONTACT_CONSTRAINT.account.identifier.maxLength)
}).required();

const accountSchema = newAccountSchema.keys({
  accountId: Joi.string()
    .required()
    .max(CONTACT_CONSTRAINT.account.accountId.maxLength)
});

const newContactSchema = Joi.object({
  name: Joi.string()
    .required()
    .max(CONTACT_CONSTRAINT.name.maxLength),
  imageUrl: Joi.string().max(CONTACT_CONSTRAINT.imageUrl.maxLength),
  accounts: Joi.array()
    .required()
    .items(newAccountSchema)
});

const contactSchema = newContactSchema.keys({
  contactId: Joi.string()
    .required()
    .max(CONTACT_CONSTRAINT.contactId.maxLength),
  accounts: Joi.array()
    .required()
    .items(accountSchema)
});

const contactCreationInputValidator = newContactSchema
  .required()
  .label('Request - create contact input');

const contactCreationResultValidator = contactSchema.label(
  'Response - created contact result'
);

const contactListQueryValidator = Joi.object({
  name: Joi.string().optional()
}).label('Request - get contacts query request');

type ContactCreationInput = Joi.extractType<
  typeof contactCreationInputValidator
>;

interface ContactCreationRequest extends hapi.Request {
  payload: ContactCreationInput;
}

type ContactCreationResult = Joi.extractType<
  typeof contactCreationResultValidator
>;

const contactListResultValidator = Joi.array()
  .items(contactSchema)
  .label('Response - list of contacts');

const contactGetResultValidator = contactSchema.label(
  'Response - customer contact result'
);

const contactIdInputParamValidator = Joi.object({
  contactId: Joi.string()
    .required()
    .not(null, NULL_CONSTRAINT)
}).label('Contact id parameter');

export {
  contactCreationInputValidator,
  contactCreationResultValidator,
  ContactCreationRequest,
  ContactCreationResult,
  contactListResultValidator,
  contactGetResultValidator,
  contactIdInputParamValidator,
  contactListQueryValidator
};
