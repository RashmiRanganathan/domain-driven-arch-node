import ContactService from "../contact.service";
import ContactRepository from "../contact.repository";
import { Contact } from "../contact.type";

jest.mock("../contact.repository");

describe("Contact - Service", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("create", () => {
    it("should reject with contact already exists error if repository responds with nothing", async () => {
      // Given
      (ContactRepository.create as jest.Mock).mockResolvedValue(undefined);
      const contact: Contact = {
        id: "123",
        name: "Tony",
        phoneNumbers: [],
      };

      // When
      try {
        await ContactService.create(contact);
        fail();
      } catch (error) {
        // Then
        expect(error.message).toContain("Contact already exists");
      }
    });
  });
});
