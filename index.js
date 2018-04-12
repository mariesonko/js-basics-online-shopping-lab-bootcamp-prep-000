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
    var newCart= []
    cart.forEach(function(cart, index){
      newCart.push (index + "item - " + cart )
    })
    return ("in your cart, you have " + newCart.join (", ") + ".")
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
