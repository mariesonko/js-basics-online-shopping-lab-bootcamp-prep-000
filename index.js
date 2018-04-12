var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  var item [itemName] = name
  var price = Math.floor(Math.random()*99)
  cart.push (new Object ({[item]:price}))
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length === 0){
    return ("Your shopping cart is empty.")
  }/*else {
    var myCart= []
    cart.forEach(getCart(itemName, itemPrice){
      myCart.push (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`)
    })
    return (`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice},
            and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`)
  }*/

function total() {
  var addTotal;
  for (var i= 0; i< cart.length; i++){
    for (var item in cart[i]) {
      addTotal += cart[i][item]
    }
  }
  return addTotal
}

function removeFromCart(item){
  for (var i= 0; i < cart.length ; i++ ){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart;
    }
  }
  console.log ( "That item is not in your cart.")
}

function placeOrder(cardNumber) {
  var emptyCart = []
  if ( cardNumber === undefined ){
    console.log ("Sorry, we don't have a credit card on file for you.")
  }else {
    console.log( `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  }
  setCart (emptyCart)
}
}
