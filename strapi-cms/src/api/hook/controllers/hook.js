'use strict';

/**
 * hook controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hook.hook');
