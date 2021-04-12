import { Contact } from "../contact.type";
import ContactRepository from "../contact.repository";

describe("Contact - Repository", () => {
  beforeEach(async () => {
    ContactRepository.clear();
  });

  describe("create", () => {
    it("should create a contact", async () => {
      // Given
      const contact: Contact = {
        id: "123",
        name: "Tony",
        phoneNumbers: [],
      };

      // When
      const result = await ContactRepository.create(contact);

      // Then
      expect(result).toEqual(contact);
      expect(await ContactRepository.get(contact.id)).toEqual(contact);
    });
  });
});
