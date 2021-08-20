var removeCartItemButtons = document.getElementsByClassName("delete");
console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", function () {
    console.log(button.parentElement);
    button.parentElement.remove();
    CalculTotal();
  });
}

var colorHeartButton = document.getElementsByClassName("like");
console.log(colorHeartButton);
for (var i = 0; i < colorHeartButton.length; i++) {
  let likeButton = colorHeartButton[i];
  likeButton.addEventListener("click", function () {
    if (likeButton.style.color != "red") {
      likeButton.style.color = "red";
    } else {
      likeButton.style.color = "black";
    }
  });
}

var plusCartItemButtons = document.getElementsByClassName("plus-btn");
console.log(plusCartItemButtons);
for (var i = 0; i < plusCartItemButtons.length; i++) {
  let buttonplus = plusCartItemButtons[i];
  buttonplus.addEventListener("click", function () {
    buttonplus.previousElementSibling.value++;
    CalculTotal();
  });
}
var minusCartItemButtons = document.getElementsByClassName("minus-btn");
console.log(minusCartItemButtons);
for (var i = 0; i < minusCartItemButtons.length; i++) {
  let buttonminus = minusCartItemButtons[i];
  buttonminus.addEventListener("click", function () {
    if (buttonminus.nextElementSibling.value >= 1) {
      buttonminus.nextElementSibling.value--;
    }
    CalculTotal();
  });
}
function CalculTotal() {
  var cartitems = document.getElementsByClassName("items")[0];
  var pay = document.getElementsByClassName("Item");
  var total = 0;
  for (var i = 0; i < pay.length; i++) {
    var carreau = pay[i];
    var priceElement = carreau.getElementsByClassName("price")[0];
    var quantityElement = carreau.getElementsByClassName("Quant")[0];

    var price = parseFloat(priceElement.innerText);
    var quantity = quantityElement.value;
    console.log(price * quantity);
    total = total + price * quantity;
  }
  document.getElementById("finalPrice").value = total;
}
