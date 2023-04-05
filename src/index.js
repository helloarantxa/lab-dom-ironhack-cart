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
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(element => {
    element.addEventListener('click', removeProduct);
  })

  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
}):