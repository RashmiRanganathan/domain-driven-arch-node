"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fooNewContact = {
    name: 'foo',
    imageUrl: 'http://google.com',
    accounts: [
        {
            identifier: '123'
        }
    ]
};
exports.barNewContact = {
    name: 'bar',
    accounts: [
        {
            identifier: '456'
        }
    ]
};
exports.fooAccount = {
    accountId: '386fcca2-aa09-11ea-8b95-5dea51ada413',
    identifier: '123'
};
exports.barAccount = {
    accountId: '386fcca2-aa09-11ea-8b95-5dea51ada414',
    identifier: '456'
};
exports.fooContact = Object.assign(Object.assign({}, exports.fooNewContact), { contactId: '386fcca0-aa09-11ea-8b95-5dea51ada413', imageUrl: 'http://google.com', accounts: [exports.fooAccount] });
exports.barContact = Object.assign(Object.assign({}, exports.barNewContact), { contactId: '386fcca0-aa09-11ea-8b95-5dea51ada414', imageUrl: 'http://google.com', accounts: [exports.barAccount] });
//# sourceMappingURL=contacts.data.js.map