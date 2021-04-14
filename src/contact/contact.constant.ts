export const CONTACT_CONSTRAINT = {
  contactId: {
    maxLength: 50
  },
  name: {
    maxLength: 50
  },
  imageUrl: {
    maxLength: 250
  },
  account: {
    accountId: {
      maxLength: 50
    },
    identifier: {
      maxLength: 50
    }
  }
};

export const NULL_CONSTRAINT = '';
