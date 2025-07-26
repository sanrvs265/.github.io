const cartDisplay = document.getElementById('cart');
let cartCount = 0;

document.querySelectorAll('.product button').forEach(btn => {
  btn.addEventListener('click', () => {
    const prod = btn.closest('.product');
    const name = prod.dataset.name;
    cartCount++;
    cartDisplay.textContent = `Cart: ${cartCount}`;
    alert(`Added "${name}" to cart.`);
  });
});

// Simple interception on contact form submit to prevent refresh
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  e.target.reset();
});

