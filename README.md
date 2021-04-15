# Domain Driver Architecture
Domain-driven design (DDD) based on particular use case scenario.
In the context of building applications, DDD talks about problems as domains. 
The microservice code is divided into different sub components which is mostly independent of eachother. 

There are 3 layers
1. `Controller` - presentation layer which container the route and request, response validation. This layer can only talk to service layer and shouldnt contain business logic.

2. `Service` - contains business logic and responsible to return data from lower layer to controller. It can also communicate with service file of other domains.

3. `Repository` - data layer which wither talks to database model or makes a network call to fetch data. This layer is reponsible to talk to only service layer and shouldnt contain any business logic apart from CRUD operations.

The domains can be of 3 types.
1. `CRUD operation` - directly performs operation on the collection of its database.
2. `Network operation` - only makes network calls and doesnt have a controller. The service layer is consumed by other services files.
3. `Common` - Files that are reused by other domains.

Each domain has a set of supporting files
examples:
1. contants - used only within the domain
2. validator - request - response validation + customer validations
3. util - helper functions
4. types - datatypes used between all layers within the domain
5. model - database model / ORM model

## Folder structure

├── src
│   ├── __jest__
│   │   └── setup.ts
│   ├── common
│   │   ├── __tests__
│   │   │   └── errors.spec.ts
│   │   ├── constant.ts
│   │   ├── errors.ts
│   │   └── mongoDb.ts
│   ├── contact
│   │   ├── __mocks__
│   │   │   └── contacts.data.ts
│   │   ├── __tests__
│   │   │   ├── contact.controller.spec.ts
│   │   │   ├── contact.repository.spec.ts
│   │   │   └── contact.service.spec.ts
│   │   ├── contact.constant.ts
│   │   ├── contact.controller.ts
│   │   ├── contact.error.ts
│   │   ├── contact.model.ts
│   │   ├── contact.repository.ts
│   │   ├── contact.service.ts
│   │   ├── contact.type.ts
│   │   └── contact.validator.ts
│   ├── errors
│   │   └── AppError.ts
│   ├── heathcheck
│   │   └── healthcheck.controller.ts
│   ├── plugins
│   │   └── swagger.ts
│   ├── routes.ts
│   └── server.ts
├── package.json
├── package-lock.json
└── tsconfig.json
## Versions
Node 14.9.0     
Hapi 18.4.1

## Commands
How to run application  
`npm run start`

How to lint             
`npm run lint`

How to run test         
`npm run test`

How to run test coverage        
`npm run test:cov`

## Swagger documentation 
`npm run start`
## Topic covered
1. Domain Arch
2. Plugins
3. Swagger
4. MongoDb integration
5. Application Error Handling
6. Health check endpoint
7. Eslint check and min 90% test coverage check before pushing