// Filename: isccnumber.spec.js  
// Timestamp: 2014.04.22-21:16:25 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var isccnumber = require('../isccnumber');

describe("isccnumber", function () {

  it('should return `visa` for `4222222222222`', function () {
    expect( isccnumber.is(4222222222222) ).toBe('visa');
  });

  it('should return `undefined` for `242424242424`', function () {
    expect( isccnumber.is(4111111111111111) ).toBe('visa');
  });

  it('should return `undefined` for `242424242424`', function () {
    expect( isccnumber.is(242424242424) ).toBe(undefined);
  });

});


describe("isccnumber.visa.test", function () {

  it('should return `true` for `4222222222222`', function () {
    expect( isccnumber.visa.test(4222222222222) ).toBe(true);
  });

});

