// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  const subtotal = (+price) * (+quantity);

  console.log(price, quantity);
  console.log(subtotal);

  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.innerHTML = subtotal;
  console.log(subtotalElement)

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  const product = document.querySelectorAll('.product');
  for (let i = 0; i < product.length; i++) {
    total += updateSubtotal(product[i])
    console.log(total);
  }

  // ITERATION 3
  //... your code goes here

  const totalElement = document.querySelector('#total-value span');
  totalElement.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const targetProduct = target.parentNode.parentNode;
  const productParent = targetProduct.parentNode;
  console.log(targetProduct, "aaaa");
  productParent.removeChild(targetProduct);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const tbody = document.querySelector("tbody");
  const products = document.querySelectorAll(".product");
  const createProduct = document.querySelector(".create-product");
  const inputs = createProduct.querySelectorAll("input");
  const productName = inputs[0].value;
  const productPrice = inputs[1].value;
  const productClone = products[0].cloneNode(true);
  const productNameSpan = productClone.querySelector(".name span");
  const priceSpan = productClone.querySelector(".price span");
  const quantity = productClone.querySelector(".quantity input");
  const subtotalSpan = productClone.querySelector(".subtotal span");
  const deleteButton = productClone.querySelector(".action button");
  productNameSpan.textContent = productName;
  console.log(productName);
  priceSpan.textContent = productPrice;
  quantity.value = 0;
  subtotalSpan.textContent = 0;
  tbody.appendChild(productClone);
  inputs[0].value = "";
  inputs[1].value = 0;

  deleteButton.addEventListener("click", removeProduct);
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll(".btn-remove");
  console.log(removeButtons);
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
  const create = document.querySelector("#create");
  create.addEventListener("click", createProduct);
  //... your code goes here
});