'use strict';

/**
 * hook service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hook.hook');
