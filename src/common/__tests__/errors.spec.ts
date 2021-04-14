import { ERROR_CODE, ErrorList } from '../errors';

describe('common - errors', () => {
  describe('ErrorList', () => {
    it('should have all description of ERROR_CODE', () => {
      Object.keys(ERROR_CODE).forEach(key => {
        const error = ErrorList[key];
        expect(error).toBeDefined();
        expect(error.message).toBeDefined();
        expect(error.statusCode).toBeDefined();
      });
    });
  });
});
