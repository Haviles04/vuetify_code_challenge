/**
 * Blog.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: {
      type: 'string',
      required: true
    },
    text: {
      type: 'string',
      required: true
    },
    author: {
      type: 'string',
      required: true
    },
    //no date needed, we will use sails' built in createdAt, and updatedAt
  }

};

