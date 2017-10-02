const sum = require('../sum');
const assert = require('chai').assert;
describe('Array Sum',function(){
    it('Function Shuld Return A Number',function(){
        assert.typeOf(sum([1,2,3]),'number');
    });
    it('Function Shuld Return An Array',function(){
        assert.equal(sum([1,2,3]),6);
    });
})