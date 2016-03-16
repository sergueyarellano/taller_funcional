var euroToDollarFn = (function(){



    return(
        function(index,priceList){
            var shoppingCartItemPricesInDollars = [];
            for(var priceIndex=0;priceIndex<priceList.length;priceIndex++){
                var price = priceList[priceIndex];
                shoppingCartItemPricesInDollars.push((price * index).toFixed(3));
            }
            return shoppingCartItemPricesInDollars;
        }
    );


})();


var euroToDollarIndex = 1.0978;
var priceList = [2.12,3.123,3.12,3.12,1];

console.log(euroToDollarFn(euroToDollarIndex,priceList));

