"use strict";

const nodeUuid = require("node-uuid");

function giveUniqueId(obj, propName) {
  if(!propName) propName = "id";

  let id = nodeUuid.v1();
  Object.defineProperty(obj, propName, {
    enumerable: true,
    get: function() {
      return id;
    }
  });
}

module.exports = giveUniqueId;