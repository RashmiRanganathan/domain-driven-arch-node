import hapi from '@hapi/hapi';

const createContact: hapi.ServerRoute = {
  method: 'GET',
  path: '/ping',
  options: {
    description: 'should pong',
    tags: ['api', 'health'],
    handler: async (
      _hapiRequest: unknown,
      hapiResponse: hapi.ResponseToolkit
    ) => {
      return hapiResponse.response('pong');
    }
  }
};

const contactController: hapi.ServerRoute[] = [createContact];

export default contactController;
