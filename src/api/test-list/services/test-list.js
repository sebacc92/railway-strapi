'use strict';

/**
 * test-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-list.test-list');
