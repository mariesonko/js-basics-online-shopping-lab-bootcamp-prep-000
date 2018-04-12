var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push ({[item]:price})
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0){
    return ("Your shopping cart is empty.")
  }else {
    var myCart= []
    cart.forEach(function(cart, i){
      myCart.push ((`${Object.keys(cart[i])} at $${cart[i] [price]}`) + (i +1) + "item - " + cart )
    })
    return ("In your cart, you have " + myCart.join (", ") + ".")
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  for (var i= 0; i < cart.length ; i++ ){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart;
    }
  }
  console.log ( "That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
}
