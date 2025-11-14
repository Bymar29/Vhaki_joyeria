function changeQty(value) {
  let qty = document.getElementById("qty");
  let amount = parseInt(qty.innerText);
  amount = Math.max(1, amount + value);
  qty.innerText = amount;
}

function addToCart() {
  alert("Producto añadido al carrito 🎉");
}
