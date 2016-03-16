"use strict";

var should = chai.should();


describe('testing healthy food',function(){

    var products = [];

    before("",function(){
        products = [
            {
                name:'chocolate',
                healthy:false
            },
            {
                name:'meat',
                healthy:true
            },
            {
                name:'milk',
                healthy:true
            },
            {
                name:'fruit',
                healthy:false
            },
            {
                name:'alcohol',
                healthy:false
            },
            {
                name:'sugar',
                healthy:false
            }
        ];
    });

    it('The array of food is empty', function() {
        task005.healthyFood([]).should.be.empty;
    });

    it('There is not any healthy food in the array', function() {
        task005.healthyFood([{
            name:'chocolate',
            healthy:false
        }]).should.be.empty;
    });


    it('There is some healthy food in the array', function() {
        task005.healthyFood(products).length.should.be.equal(2);
    });


});


describe('testing unhealthy food',function(){

    var products = [];

    before("",function(){
        products = [
            {
                name:'chocolate',
                healthy:false
            },
            {
                name:'meat',
                healthy:true
            },
            {
                name:'milk',
                healthy:true
            },
            {
                name:'fruit',
                healthy:false
            },
            {
                name:'alcohol',
                healthy:false
            },
            {
                name:'sugar',
                healthy:false
            }
        ];
    });

    it('The array of food is empty', function() {
        task005.unHealthyFood([]).should.be.empty;
    });

    it('There is not any unhealthy food in the array', function() {
        task005.unHealthyFood([{
            name:'milk',
            healthy:true
        }]).should.be.empty;
    });


    it('There is some unHealthy food in the array', function() {
        task005.unHealthyFood(products).length.should.be.equal(4);
    });


});
