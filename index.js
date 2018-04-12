var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName
  item = ({[itemName]:name})
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
    cart.forEach(function(cart, index){
      myCart.push ((`${Object.keys(cart[index])} at $${cart[i] [price]}`) + (index +1) + "item - " + cart )
    })
    return ("In your cart, you have " + myCart.join (", ") + ".")
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
