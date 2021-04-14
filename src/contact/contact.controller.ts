import hapi from '@hapi/hapi';
import contactService from './contact.service';
import {
  contactCreationInputValidator,
  contactCreationResultValidator,
  ContactCreationRequest,
  contactListResultValidator,
  contactGetResultValidator,
  contactIdInputParamValidator,
  contactListQueryValidator
} from './contact.validator';
import { StatusCode } from '../common/errors';
import { IGetContactRequest, IContactListRequest } from './contact.type';

const createContact: hapi.ServerRoute = {
  method: 'POST',
  path: '/contacts',
  options: {
    description: 'Create new contact',
    notes: 'All information must valid',
    tags: ['api', 'contacts'],
    validate: {
      payload: contactCreationInputValidator
    },
    response: {
      schema: contactCreationResultValidator
    },
    handler: async (
      hapiRequest: ContactCreationRequest,
      hapiResponse: hapi.ResponseToolkit
    ) => {
      const createContactResult = await contactService.create(
        hapiRequest.payload
      );
      return hapiResponse
        .response(createContactResult)
        .code(StatusCode.CREATED);
    }
  }
};

const listContact: hapi.ServerRoute = {
  method: 'GET',
  path: '/contacts',
  options: {
    description: 'Get all contact',
    notes: 'All information must valid',
    tags: ['api', 'contacts'],
    response: {
      schema: contactListResultValidator
    },
    validate: {
      query: contactListQueryValidator
    },
    handler: async (
      req: IContactListRequest,
      hapiResponse: hapi.ResponseToolkit
    ) => {
      const query = req.query;
      const contactList = await contactService.getContacts(query.name);
      return hapiResponse.response(contactList).code(StatusCode.OK);
    }
  }
};

const getContactDetail: hapi.ServerRoute = {
  method: 'GET',
  path: '/contacts/{contactId}',
  options: {
    description: 'Get contact of customer by contactId',
    notes: 'contact id must be valid',
    tags: ['api', 'contacts'],
    validate: {
      params: contactIdInputParamValidator
    },
    response: {
      schema: contactGetResultValidator
    },
    handler: async (
      hapiRequest: IGetContactRequest,
      hapiResponse: hapi.ResponseToolkit
    ) => {
      const contact = await contactService.getContactDetail(
        hapiRequest.params.contactId
      );
      return hapiResponse.response(contact).code(StatusCode.OK);
    },
    plugins: {
      'hapi-swagger': {
        responses: {
          [StatusCode.OK]: {
            description: 'Return contact detail'
          },
          [StatusCode.NOT_FOUND]: {
            description: 'contactId is not found.'
          }
        }
      }
    }
  }
};

const contactController: hapi.ServerRoute[] = [
  createContact,
  listContact,
  getContactDetail
];

export default contactController;
