import * as Joi from "@hapi/joi";
import hapi from "@hapi/hapi";
import "joi-extract-type";

const contactCreationInputValidator = Joi.object({
  id: Joi.string().required().max(50),
  name: Joi.string().required().max(100),
  phoneNumbers: Joi.array()
    .items(Joi.string().required().min(10).max(12))
    .required(),
}).label("Request - create contact input");

const contactCreationResultValidator = Joi.object({
  id: Joi.string().required().max(50),
  name: Joi.string().required().max(100),
  phoneNumbers: Joi.array()
    .items(Joi.string().required().min(10).max(12))
    .required(),
}).label("Response - created contact result");

type ContactCreationInput = Joi.extractType<
  typeof contactCreationInputValidator
>;

interface ContactCreationRequest extends hapi.Request {
  payload: ContactCreationInput;
}

export {
  contactCreationInputValidator,
  contactCreationResultValidator,
  ContactCreationRequest,
};
