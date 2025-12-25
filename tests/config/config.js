import 'dotenv/config';

require('dotenv').config();

const configurations = {
  staging: {
    USER_1: process.env.USER_1_STAGING || '',
    PWD_USER_1: process.env.PWD_USER_1_STAGING || '',
    USER_2: process.env.USER_2_STAGING || '',
    PWD_USER_2: process.env.PWD_USER_2_STAGING || '',
  },
  beta: {
    // add beta config here if needed
  },
  production: {
    // add production config here if needed
  },
};

const ENVIRONMENT = process.env.ENVIRONMENT || 'STAGING';

let config;

switch (ENVIRONMENT) {
  case 'STAGING':
    config = configurations.staging;
    break;
  case 'BETA':
    config = configurations.beta;
    break;
  case 'PROD':
    config = configurations.production;
    break;
  default:
    throw new Error(`Unknown ENVIRONMENT: ${ENVIRONMENT}`);
}

export default config;