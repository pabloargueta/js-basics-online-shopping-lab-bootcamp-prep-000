var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random()*100)+1);
 var itemObject = {itemName: item, itemPrice: price};
 cart.push(itemObject);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  
  var itemList = "";
  if(cart[0] === undefined) {
    return "Your shopping cart is empty.";
  }
  else {
    for(var i = 0; i < cart.length; i++) {
      var tempString = `${cart[i].itemName} at ${cart[i].itemPrice},`
      itemList.push()
    }
    
    return `In your cart, you have ${itemList}`;
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
