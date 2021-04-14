import hapi, { ServerInjectOptions } from '@hapi/hapi';

import { ContactCreationResult } from '../contact.validator';
import contactService from '../contact.service';
import controller from '../contact.controller';
import { StatusCode } from '../../common/errors';
import { NewContact } from '../contact.type';
import { fooContact, fooNewContact } from '../__mocks__/contacts.data';

jest.mock('../contact.service');

describe('contact api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const server = new hapi.Server();
  server.route(controller);

  const contactRequest = async <T extends object>(
    payload: T,
    url: string,
    method: string
  ) => {
    const options: ServerInjectOptions = {
      method,
      url: url,
      payload
    };
    const result = await server.inject(options);
    return result;
  };

  describe('POST /contacts', () => {
    it('should create contact if payload is correct', async () => {
      //  Given
      const requestData: NewContact = { ...fooNewContact };
      const contactCreationResponse: ContactCreationResult = fooContact;
      (contactService.create as jest.Mock).mockResolvedValueOnce(
        contactCreationResponse
      );

      // When
      const result = await contactRequest(requestData, `/contacts`, 'POST');

      // Then
      expect(result['statusCode']).toBe(StatusCode.CREATED);
      expect(result['result']).toEqual(contactCreationResponse);
      expect(contactService.create).toBeCalledWith(requestData);
    });
  });

  describe('GET /contacts', () => {
    it('returns contact list summary', async () => {
      const contactList = [{ ...fooContact }];
      (contactService.getContacts as jest.Mock).mockResolvedValueOnce(
        contactList
      );

      const response = await contactRequest(null, '/contacts', 'GET');

      expect(response.statusCode).toBe(StatusCode.OK);
      expect(response.result).toBe(contactList);
    });
  });
});
