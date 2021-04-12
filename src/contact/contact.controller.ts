import hapi, { Request } from "@hapi/hapi";
import contactService from "./contact.service";
import {
  contactCreationInputValidator,
  ContactCreationRequest,
  contactCreationResultValidator,
} from "./contact.validator";

const createContact: hapi.ServerRoute = {
  method: "POST",
  path: "/contacts",
  options: {
    description: "Create new contact",
    notes: "All information must valid",
    tags: ["api", "contacts"],
    validate: {
      payload: contactCreationInputValidator,
    },
    response: {
      schema: contactCreationResultValidator,
    },

    handler: async (
      hapiRequest: ContactCreationRequest,
      hapiResponse: hapi.ResponseToolkit
    ) => {
      const createContactResult = await contactService.create(
        hapiRequest.payload
      );
      return hapiResponse.response(createContactResult).code(201);
    },
  },
};

const getContact: hapi.ServerRoute = {
  method: "GET",
  path: "/contacts/{id}",
  options: {
    description: "Get a contact",
    notes: "All information must valid",
    tags: ["api", "contacts"],
    handler: async (
      hapiRequest: Request,
      hapiResponse: hapi.ResponseToolkit
    ) => {
      const contactId = hapiRequest.params.id;
      const getContactResult = await contactService.get(contactId);
      return hapiResponse.response(getContactResult);
    },
  },
};

const deleteContact: hapi.ServerRoute = {
  method: "DELETE",
  path: "/contacts/{id}",
  options: {
    description: "Delete a contact",
    notes: "All information must valid",
    tags: ["api", "contacts"],
    handler: async (
      hapiRequest: Request,
      hapiResponse: hapi.ResponseToolkit
    ) => {
      const contactId = hapiRequest.params.id;
      await contactService.remove(contactId);
      return hapiResponse.response().code(204);
    },
  },
};
const contactController: hapi.ServerRoute[] = [
  createContact,
  getContact,
  deleteContact,
];
export default contactController;
