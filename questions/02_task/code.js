var shoppingCartTotalPrice = (function(){

  return (
	  function(shoppingCarItems){
  		var totalPrice  = 0;
  		for(var itemIndex=0;itemIndex<shoppingCarItems.length;itemIndex++){
			var item = shoppingCarItems[itemIndex];
  			totalPrice+= (item.amount*item.unitPrice)
  		}
  		return totalPrice;
  	}
  );

})(this);


var items = [
	{
		name:'Domus IPA',
		amount:3,
		unitPrice:2.5,
	},
	{
		name:'Cibeles',
		amount:6,
		unitPrice:2.0
	},
	{
		name:'La Victoria',
		amount:2,
		unitPrice:1.35
	}
];


console.log(shoppingCartTotalPrice(items));
