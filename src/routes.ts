import contactController from './contact/contact.controller';
import healthcheck from './heathcheck/healthcheck.controller';

const routes = [...contactController, ...healthcheck];

export { routes };
