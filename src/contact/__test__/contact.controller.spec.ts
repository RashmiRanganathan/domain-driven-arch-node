import hapi = require("@hapi/hapi");
import ContactService from "../contact.service";
import ContactController from "../contact.controller";

jest.mock("../contact.service");

describe("Contact - Controller", () => {
  let server: hapi.Server;

  afterEach(() => {
    jest.resetAllMocks();
  });

  beforeAll(async () => {
    server = new hapi.Server();
    server.route(ContactController);
  });

  describe("POST /contacts", () => {
    it("should return HTTP 400 for invalid request payload", async () => {
      // Given
      const payload = { id: "123" };
      (ContactService.create as jest.Mock).mockResolvedValue(payload);

      // When
      const result = await server.inject({
        method: "POST",
        url: "/contacts",
        payload: payload,
      });

      // Then
      expect(result.statusCode).toBe(400);
      expect(ContactService.create).not.toHaveBeenCalled();
    });
  });
});
