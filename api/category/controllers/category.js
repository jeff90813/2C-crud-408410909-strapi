"use strict";
module.exports = {homepage : async (ctx) => {
  let entities;
  entities = await strapi.services.category.find();
  // console.log("entities", entities);
  return await ctx.render("crown2_xx", {
    data: entities,
    title: "Crown - 408410909",
  });
},};