"use strict";

var should = chai.should();


describe('reversing sentences',function(){

    it('The input text is empty', function() {
        var output = textUtilities.reverse("");
        output.should.be.equal('');
    });

    it('The input text is a palindrome', function() {
        var input = "ABCDDCBA";
        var output = textUtilities.reverse(input);
        output.should.be.equal(input);
    });

    it('Any sentece will be reversed correctly', function() {
        var input = "Hola que tal?";
        var output = textUtilities.reverse(input);
        output.should.be.equal('?lat euq aloH');
    });

});
