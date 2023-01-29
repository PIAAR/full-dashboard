'use strict';

/**
 * price-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::price-action.price-action');
