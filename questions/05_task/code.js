var task004 = (function(){

    function isBiggerThan(number,limit){
        return number>limit;
    }

    function isOdd(number){
        return !isEven(number);
    }

    function isEven(number){
        number = Number(number);
        return number === 0 || !!(number && !(number%2));
    }

    return ({

        areOdd:function(elements){

        },

        areEven:function(elements){

        },

        areBiggerThan: function(limit,elements){

        }


    })


})();

console.log(task004.areEven([2,4,6,8,10,12])); //true
console.log(task004.areEven([1,2,3,4,5,6,7,8,5,4,4])); //false

console.log(task004.areOdd([1,7,9,15,17,19])); //true
console.log(task004.areOdd([1,2,3,4,5,6,7,8,5,4,4]));//false

console.log(task004.areBiggerThan(10,[11,12,32])); //true
console.log(task004.areBiggerThan(10,[11,12,32,3])); //false

