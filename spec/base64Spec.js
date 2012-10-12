/*globals Backbone,  beforeEach, $, _, require, jasmine, describe, it, expect, loadFixtures*/

describe("Cache", function () {
  "use strict";

  var base64map,
    base64mapScrambled;

  beforeEach(function () {
    base64mapScrambled = 'eyJmb28iOiJabTl2IiwiIUAjQCojJipAIyQqQCMkISI6IklVQWpRQ29qSmlwQUl5UXFRQ01rSVEtLSJ9';
    base64map = {
      'foo' : 'Zm9v',
      '!@#@*#&*@#$*@#$!' : 'IUAjQCojJipAIyQqQCMkIQ--'
    };
  });

  it("Should be attached to the window", function() {
     expect(window.base64).toBeTruthy();
  });

  it("Should Base64 Encode Values", function () {

    _.each(base64map, function (encoded,decoded) {
      expect(window.base64.encode(decoded)).toEqual(encoded);
    });
  });

  it("Should Base64 Decode Values", function () {
    _.each(base64map, function (encoded,decoded) {
      expect(window.base64.decode(encoded)).toEqual(decoded);
    });
  });

});
