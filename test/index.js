"use strict";
/* jshint mocha: true */

const chai         = require("chai"),
      giveUniqueId = require("..");

const assert = chai.assert;

describe("giveUniqueId", function() {
  it("adds a property to the given object", function() {
    let object = {};
    giveUniqueId(object, "prop");
    assert.ok(object.prop);
  });

  it("defaults the property name to \"id\"", function() {
    let object = {};
    giveUniqueId(object);
    assert.ok(object.id);
  });

  it("actually assigns unique IDs", function() {
    let o1 = {};
    let o2 = {};
    giveUniqueId(o1);
    giveUniqueId(o2);
    assert.notEqual(o1.id, o2.id);
  });
});