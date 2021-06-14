'use strict';

const fetch = require("node-fetch");

module.exports = {
  crudPage: async (ctx) => {
    try {
      const response = await fetch('http://localhost:1337/rams');
      const data = await response.json();
      console.log('crudramPage', data);
      return await ctx.render('crud_ram/index', { data });
    } catch (err) {
      console.log('Errors on getting books!');
      return await ctx.render('crud_ram/index', { data: '' });
    }
  },
};
