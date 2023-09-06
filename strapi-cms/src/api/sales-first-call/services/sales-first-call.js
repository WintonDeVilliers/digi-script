'use strict';

/**
 * sales-first-call service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sales-first-call.sales-first-call');
